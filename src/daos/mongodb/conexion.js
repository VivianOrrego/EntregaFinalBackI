import mongoose from "mongoose";

const connectionString = 'mongodb+srv://ViviOrrego:CoderHause@cluster0.moxbuih.mongodb.net/coderfinal?retryWrites=true&w=majority&appName=Cluster0';

//Conectarse a la base de datos
export const initMongoDB = async ()=> {
    try {
        await mongoose.connect(connectionString)        
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.log(error);
    }
}