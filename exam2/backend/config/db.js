import mongoose from "mongoose"
import { ENVS } from "./envs.js"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENVS.MONGO_URI)
        console.log(`MongoDB connected ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error occured while connection to database: ${error.message}`);
        process.exit(1); // 1 означає що помилка
    }
}
