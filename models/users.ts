import mongoose from "mongoose";

const UserScema = new mongoose.Schema({
    name: String,
    age: Number,
    uid: String
});

export default mongoose.model('User', UserScema);