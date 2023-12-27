import mongoose from "mongoose";


export type user = {
    uid: number,
    name: string,
    password: string,
    age: number,
    token?: string
};

const UserScema = new mongoose.Schema<user>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    uid: { type: Number, required: true, unique: true, default: Math.floor(Math.random() * 100000) },
    token: { type: String, required: false },
});

export default mongoose.model('User', UserScema);