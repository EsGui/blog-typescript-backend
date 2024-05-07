import ConnectionDB from "../connection/ConnectionDB";
import { Request, Response } from "express";
import UserSchema from "../connection/UserSchema";

const users = new ConnectionDB().UsersDB()
const model = new ConnectionDB().UsersModel

class LoginController {

    public async listUsers(req: Request, res: Response) {
        

        const request = await users?.find();

        return res.status(200).json(request);
    }

    public async createUser(req: Request, res: Response) {
        const {
            name,
            email,
            password 
        } = req.body

        const users = new model({
            name,
            email,
            password,
        });

        users.save();

        return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
    }
}

export default LoginController;
