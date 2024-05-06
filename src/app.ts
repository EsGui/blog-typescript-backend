import express from 'express';
import bodyParser from 'body-parser'
import LoginController from './controllers/LoginController';
import ConnectionDB from './connection/ConnectionDB';

class App {
    public app: express.Express;
    public loginController: any = new LoginController().listUsers;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json())
    }

    public routes(): void {
        this.app.get("/", this.loginController)
    }

    public onServer(): void {
        this.app.listen(3001, () => console.log(`Servidor rodando na porta ${3001}`))
    }
}

export default App;