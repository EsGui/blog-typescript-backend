import { Request, Response } from "express";
import UsersModel from "../models/UsersModel";
import JsonWebToken from "../services/JsonWebToken";
import { JwtPayload } from "jsonwebtoken";

class LoginController {
    public async listUsersController(req: Request, res: Response) {
        const list = new UsersModel().listUsers()

        return res.status(200).json(await list);
    }

    public async tokenUserController(req: Request, res: Response) {
        const {
            email,
            nickname,
            password,
        } = req.body;

        const user = await new UsersModel().userSpecific(email);

        console.log(user?.password)

        if (!user) {
            return res.status(400).json({ message: "Algo deu errado" });
        } else if (user?.password == password) {
            const token = new JsonWebToken().useJwt(email, nickname);
            return res.status(200).json({ token });
        } else {
            return res.status(400).json({ message: "password está incorreto" });
        }
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

    public async authUserController(req: Request, res: Response) {
        const {
            token,
        } = req.body;

        const verifyToken = new JsonWebToken().verifyJwt(token, 'Miojo :p');
        const user = new UsersModel().userSpecific(verifyToken?.email);

        console.log('Email vindo do jwt ===>>', verifyToken)

        if (!user) {
            return res.status(400).json({ message: "Algo deu errado!" });
        }

        console.log("usuario de fato ===>", user)

        return res.status(200).json({ user: await user });
    }
}

export default LoginController;
