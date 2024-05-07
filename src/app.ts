import express from 'express';
import bodyParser from 'body-parser'
import LoginController from './controllers/LoginController';

const loginController = new LoginController();

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json())
    }

    public routes(): void {
        this.app.get("/",loginController.listUsersController)
        this.app.post("/register-user", loginController.createUserController)
    }

    public onServer(): void {
        this.app.listen(3001, () => console.log(`Servidor rodando na porta ${3001}`))
    }
}

export default App;