import { Request, Response } from "express";
import UsersModel from "../models/UsersModel";

class LoginController {
    public async listUsersController(req: Request, res: Response) {
        const list = new UsersModel().listUsers()

        return res.status(200).json(await list);
    }

    public async createUserController(req: Request, res: Response) {
        const {
            name,
            email,
            nickname,
            password 
        } = req.body

        new UsersModel().createUsers(name, email, nickname, password);

        return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
    }
}

export default LoginController;
