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

        new BlogsModel().createBlogs(title, content, author);

        return res.status(200).json({ message: "Blog criado com sucesso" });
    }
}

export default BlogsController;
