import {Schema} from 'mongoose';

const BlogSchema = new Schema({
    title: String,
    content: String,
    author: String,
});

export default BlogSchema;