import { MongoClient } from "mongodb";
import mongoose, { Schema } from "mongoose";
import UserSchema from "./UserSchema";

class ConnectionDB {

    // public client = new MongoClient("mongodb://localhost:27017/");

    // public connectToDataBase() {
    //     try {
    //         const database = this.client.db('blog');
    //         const users = database.collection('users');
    //         return users;
    //     } catch (error) {
    //         console.error(`ERROR ====>>>> ${error}`);
    //     }
    // }

    public db = mongoose.connect("mongodb://localhost:27017/blog");
    
    public pushBank() {
        const users = mongoose.model('users', UserSchema);
        return users;
    }
}

export default ConnectionDB;