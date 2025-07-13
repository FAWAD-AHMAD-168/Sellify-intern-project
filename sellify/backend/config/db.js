import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB =async ()=> {
    try {
        const db = await mongoose.connect(MONGO_URI);
        console.log(`✅ mongoose connected ${db.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;


