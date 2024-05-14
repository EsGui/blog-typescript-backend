import { Request, Response } from "express";
import BlogsModel from "../models/BlogsModel";

class BlogsController {
    public async listBlogController(req: Request, res: Response) {
        const list = new BlogsModel().listBlogs();

        return res.status(200).json(await list)
    }

    public async creteBlogController(req: Request, res: Response) {
        const {
            title,
            content,
            author
        } = req.body;

        new BlogsModel().createBlogs(title, `http://localhost:3001/coverImages/${req && req.file && req.file.filename}`, content, author);

        return res.status(200).json({ message: "Blog criado com sucesso" });
    }

    public async blogEspecificController(req: Request, res: Response) {
        const {
            slug
        } = req.body;

        console.log(slug)

        const blog = new BlogsModel().blogEspecific(slug);

        return res.status(200).json(await blog);
    }
}

export default BlogsController;
