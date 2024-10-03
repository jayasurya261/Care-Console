import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./VideoCall.css";

const socket = io.connect('http://localhost:3000');

function VideoCall() {
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((mediaStream) => {
                setStream(mediaStream);
                myVideo.current.srcObject = mediaStream;
            })
            .catch((err) => {
                console.error("Error accessing media devices.", err);
            });

        socket.on("me", (id) => {
            setMe(id);
        });

        socket.on("callUser", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        });
    }, []);

    const callUser = (id) => {
        console.log("Calling user with ID:", id);
        console.log("Current stream:", stream);

        if (!stream) {
            alert("Stream not available. Please check your camera and microphone settings.");
            return;
        }

        try {
            const peer = new Peer({
                initiator: true,
                trickle: false,
                stream: stream,
            });

            peer.on("signal", (data) => {
                socket.emit("callUser", {
                    userToCall: id,
                    signalData: data,
                    from: me,
                    name: name,
                });
            });

            peer.on("stream", (stream) => {
                userVideo.current.srcObject = stream;
            });

            socket.on("callAccepted", (signal) => {
                setCallAccepted(true);
                peer.signal(signal);
            });

            connectionRef.current = peer;
        } catch (error) {
            console.error("Error creating peer:", error);
        }
    };

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
        });
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller });
        });
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream;
        });

        peer.signal(callerSignal);
        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
    };

    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white mb-8">Zoomish</h1>
            <div className="flex flex-col md:flex-row">
                <div className="video-container">
                    <div className="video">
                        {stream && (
                            <video playsInline muted ref={myVideo} autoPlay className="border-2 border-white rounded-lg w-80 h-64" />
                        )}
                    </div>
                    <div className="video">
                        {callAccepted && !callEnded ? (
                            <video playsInline ref={userVideo} autoPlay className="border-2 border-white rounded-lg w-80 h-64" />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="myId mt-4">
                <input
                    type="text"
                    className="bg-gray-600 text-white p-2 rounded-md mb-2"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                    <button className="bg-blue-500 text-white p-2 rounded-md">
                        Copy ID
                    </button>
                </CopyToClipboard>

                <input
                    type="text"
                    className="bg-gray-600 text-white p-2 rounded-md mb-2"
                    placeholder="ID to call"
                    value={idToCall}
                    onChange={(e) => setIdToCall(e.target.value)}
                />
                <div className="call-button">
                    {callAccepted && !callEnded ? (
                        <button onClick={leaveCall} className="bg-red-500 text-white p-2 rounded-md">
                            End Call
                        </button>
                    ) : (
                        <button onClick={() => callUser(idToCall)} className="bg-green-500 text-white p-2 rounded-md">
                            Call
                        </button>
                    )}
                </div>
            </div>
            {receivingCall && !callAccepted ? (
                <div className="caller mt-4">
                    <h1 className="text-xl text-white">{name} is calling...</h1>
                    <button onClick={answerCall} className="bg-blue-500 text-white p-2 rounded-md">
                        Answer
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default VideoCall;
