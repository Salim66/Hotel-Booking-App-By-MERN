import mongoose from "mongoose";

// create mongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log(`MongoDB connection is successfully`.bgMagenta.black);
    } catch (error) {
        throw error;
    }
}

// export default
export default connectDB;