import ConnectionDB from "../connection/ConnectionDB";

class LoginController {
    constructor() {
        new ConnectionDB();
    } 
    
    public async listUsers(req, res) {
        const bank = new ConnectionDB().run();
        console.log(bank.find())
        return res.status(200).json(bank);
    }
}

export default LoginController;