import React, { useState } from 'react';
import './ChatBot.css'; // Import the CSS file

const ChatBot = () => {
    const [chatVisible, setChatVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const toggleChat = () => {
        setChatVisible(!chatVisible);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        // Add the user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'user', text: userInput },
        ]);

        setUserInput(''); // Clear the input

        // Simulate bot typing indicator
        const typingIndicator = { type: 'bot', text: 'Bot is typing...' };
        setMessages((prevMessages) => [...prevMessages, typingIndicator]);

        // Fetch the bot response
        fetch('http://127.0.0.1:5000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        })
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                // Remove the typing indicator
                setMessages((prevMessages) =>
                    prevMessages.filter((message) => message.text !== 'Bot is typing...')
                );

                // Add bot response to the chat
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { type: 'bot', text: data.answer || "Sorry, I couldn't understand that." },
                ]);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Remove typing indicator in case of error
                setMessages((prevMessages) =>
                    prevMessages.filter((message) => message.text !== 'Bot is typing...')
                );
            });
    };

    return (
        <div>
            {/* Chat Icon */}
            <div id="chat-icon" onClick={toggleChat}>
                <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/chat.png"
                    alt="Chat Icon"
                />
            </div>

            {/* Chat Container */}
            {chatVisible && (
                
                <div id="chat-container">
                    <div id="chat-title">
                    <img className='chat-img'
                    src="https://i.pinimg.com/236x/38/67/c7/3867c7bf6d878da4cda49c2f014b97dc.jpg"
                    alt="Chat Icon"
                />Care Console</div>
                <hr />
                    <div id="messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.type}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        id="user-input"
                        value={userInput}
                        placeholder="Ask your medical question..."
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') handleSendMessage();
                        }}
                    />
                    <button
                        id="send-button"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
