import ConnectionDB from "../connection/ConnectionDB";
import { Request, Response } from "express";

class LoginController {

    public async listUsers(req: Request, res: Response) {
        const users = new ConnectionDB().pushBank()

        const request = await users?.find({ name: "Guilherme" });

        return res.status(200).json(request);
    }
}

export default LoginController;
