import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: String,
    content: String,
})

export default mongoose.model('Post', PostSchema);
