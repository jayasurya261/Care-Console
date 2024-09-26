import express, { request, response } from 'express';
import {PORT,mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import cors from 'cors'
import { User } from './models/models.js';
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json())
app.use(cors())


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack')
})
app.use('/users',userRoutes);
app.use('/appointments',userRoutes);
app.use('/admin',userRoutes);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT,()=>{
            console.log(`App is listening to port : ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    });
