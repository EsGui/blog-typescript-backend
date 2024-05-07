import { MongoClient } from "mongodb";
import mongoose, { Schema } from "mongoose";
import UserSchema from "./UserSchema";

class ConnectionDB {

    public db = mongoose.connect("mongodb://localhost:27017/blog");
    public UsersModel = mongoose.model('users', UserSchema);
    
    public UsersDB() {
        return this.UsersModel;
    }
}

export default ConnectionDB;