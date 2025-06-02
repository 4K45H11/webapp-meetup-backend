import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const mongoUrl = process.env.MONGODB;

const initializeDatabase = async ()=>{
    try {
        await mongoose.connect(mongoUrl)
        console.log('Connected to database.')
    } catch (error) {
        console.log('Can not connect to the database!')
    }
}

export default initializeDatabase;