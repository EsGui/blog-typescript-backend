import mongoose from "mongoose";
import UserSchema from "../connection/UserSchema";
import ConnectionDB from "../connection/ConnectionDB";

class UsersModel extends ConnectionDB {
    public Users = mongoose.model('users', UserSchema);

    public async listUsers() {
        return this.Users.find();
    }

    public async userSpecific(email: string) {
        const user = this.Users.findOne({ email });
        return user;
    }

    public createUsers(name: String, email: String, nickname: String, password: String) {
        const create = new this.Users({
            name,
            email,
            nickname,
            password
        })
        create.save();
    }
}

export default UsersModel;