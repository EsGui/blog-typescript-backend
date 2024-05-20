import mongoose from "mongoose";
import BlogSchema from "../connection/BlogSchema";
import ConnectionDB from "../connection/ConnectionDB";

class BlogsModel extends ConnectionDB {
    public Blogs = mongoose.model('blog', BlogSchema);

    public listBlogs() {
        return this.Blogs.find();
    }

    public createBlogs(title: String, coverImage: String, content: String, author: String, userId: String) {
        const create = new this.Blogs({
            title,
            coverImage,
            slug: title.replace(" ", "-"),
            content,
            author,
            userId
        });
        create.save();
    }

    public blogEspecific(slug: String) {
       return this.Blogs.findOne({ slug })
    }
}

export default BlogsModel;