import { MongoClient } from "mongodb";
import mongoose, { Schema } from "mongoose";
import UserSchema from "./UserSchema";

class ConnectionDB {
    public connectDB() {
        try {
            mongoose.connect("mongodb://localhost:27017/blog");
            console.log("Servidor conectado com sucesso!")
        } catch (error) {
            console.error(`Error ===>>> ${error}`)
        }
    }
}

export default ConnectionDB;