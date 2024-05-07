import mongoose from "mongoose";
import UserSchema from "../connection/UserSchema";
import ConnectionDB from "../connection/ConnectionDB";

const db = new ConnectionDB();
db.connectDB();

class UsersModel {
    public Users = mongoose.model('users', UserSchema);

    public async listUsers() {
        return this.Users.find();
    }

    public createUsers(name: String, email: String, password: String) {
        const create = new this.Users({
            name,
            email,
            password
        })
        create.save();
    }
}

export default UsersModel;