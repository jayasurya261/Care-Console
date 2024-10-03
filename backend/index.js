import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',  // Update with your frontend URL
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log("New socket connection: ", socket.id);
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callEnded');
        console.log(`Socket disconnected: ${socket.id}`);
    });

    socket.on('callUser', (data) => {
        io.to(data.userToCall).emit('callUser', {
            signal: data.signalData,
            from: data.from,
            name: data.name
        });
        console.log(`Calling user: ${data.userToCall}`);
    });

    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
        console.log(`Answering call for user: ${data.to}`);
    });
});

app.get('/', (req, res) => {
    return res.status(200).send('Welcome to the MERN Stack Application with Video Call!');
});

app.use('/users', userRoutes);
app.use('/appointments', userRoutes);
app.use('/admin', userRoutes);
app.use('/tablets', userRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        server.listen(PORT,'0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });
