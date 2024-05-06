import ConnectionDB from "../connection/ConnectionDB";

class LoginController {

    public async listUsers(req: Request, res: Response) {
        const users = new ConnectionDB().connectToDataBase()

        const request = await users.find({name: "Guilherme"}).toArray();

        return res.status(200).json(request);
    }
}

export default LoginController;