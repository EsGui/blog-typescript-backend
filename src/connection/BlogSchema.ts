import {Schema} from 'mongoose';

const BlogSchema = new Schema({
    title: String,
    coverImage: String,
    slug: String,
    userId: String,
    content: String,
    author: String,
});

export default BlogSchema;