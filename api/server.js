import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import usersRouter from './routes/users.js';
import cookieParser from 'cookie-parser';


// config express
const app = express();
// config dot env
dotenv.config();

// get server port from env config
const PORT = process.env.SERVER_PORT || 5000


// middleware
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/hotels', hotelsRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/users', usersRouter);

// error middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something want wrong!";
    return res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message : errorMessage,
        stack: err.stack
    });
})



// mongodb connection any problem 
mongoose.connection.on("disconnected", () => {
    console.log(`MongoDB is disconnected`.bgRed.black);
})

mongoose.connection.on("connected", () => {
    console.log(`MongoDB is connected`.bgYellow.black);
})

// llsten server with port
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is successfully connection on port ${PORT}`.bgGreen.black);
})