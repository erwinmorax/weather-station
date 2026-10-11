import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const conectarDB = async () => {
    try {
        const url = process.env.MONGO_DB_URI;
        await mongoose.connect(url);
        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.log("Error al conectar a la base de datos.");
        console.error("Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};

export default conectarDB;

