import mongoose, { Schema } from "mongoose";

export type Post = {
    title: string,
    content: string,
    likes: number,
    user: string,
};


const PostSchema = new Schema({
    title: { type: String, required: true, maxlength: 100, minlength: 5, trim: true },
    content: String,
    likes: {
        type: Number, default: 0,
        validate(value: number) {
            if (value < 0) {
                throw new Error("Likes cannot be negative");
            }
        }
    },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
})

export default mongoose.model('Post', PostSchema);
