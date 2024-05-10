import {Schema} from 'mongoose';

const BlogSchema = new Schema({
    title: String,
    coverImage: String,
    content: String,
    author: String,
});

export default BlogSchema;