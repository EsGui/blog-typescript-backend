import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import LoginController from './controllers/LoginController';
import BlogsController from './controllers/BlogsController';
import multerCoverImage from './uploadArquivos/uploadCoverImage/coverImage';

const loginController = new LoginController();
const blogsController = new BlogsController();

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(express.static('src/uploads/'))
    }

    public routes(): void {
        this.app.get("/", (req, res) => res.status(200).json({ message: "Hello world!" }))
        this.app.post("/login", loginController.tokenUserController);
        this.app.post("/persist-login", loginController.authUserController);
        this.app.post("/register-user", loginController.createUserController);
        this.app.get("/list-blogs", blogsController.listBlogController);
        this.app.post("/register-blog", multerCoverImage.single('file'),blogsController.creteBlogController);
    }

    public onServer(): void {
        this.app.listen(3001, () => console.log(`Servidor rodando na porta ${3001}`))
    }
}

export default App;