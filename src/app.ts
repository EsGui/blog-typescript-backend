import express from 'express';
import bodyParser from 'body-parser'
import LoginController from './controllers/LoginController';
import BlogsController from './controllers/BlogsController';

const loginController = new LoginController();
const blogsController = new BlogsController();

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json())
    }

    public routes(): void {
        this.app.get("/", (req, res) => res.status(200).json({ message: "Hello world!" }))
        this.app.get("/login",loginController.listUsersController)
        this.app.post("/register-user", loginController.createUserController)
        this.app.get("/list-blogs", blogsController.listBlogController)
        this.app.post("/register-blog", blogsController.creteBlogController)
    }

    public onServer(): void {
        this.app.listen(3001, () => console.log(`Servidor rodando na porta ${3001}`))
    }
}

export default App;