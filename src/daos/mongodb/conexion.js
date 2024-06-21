import mongoose from "mongoose";
import 'dotenv/config'

const MONGO_URL = process.env.MONGO_URL

//Conectarse a la base de datos
export const initMongoDB = async ()=> {
    try {
        await mongoose.connect(MONGO_URL)        
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.log(error);
    }
}