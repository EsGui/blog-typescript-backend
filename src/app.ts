import express from 'express';

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
    }

    public routes(): void {
        this.app.get("/", (req, res) => res.status(200).json({ message: 'hello world' }))
    }

    public onServer(): void {
        this.app.listen(3001, () => console.log(`Servidor rodando na porta ${3001}`))
    }
}

export default App;