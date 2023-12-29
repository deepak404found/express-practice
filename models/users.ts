import mongoose from "mongoose";


export type user = {
    uid: number,
    name: string,
    password: string,
    age: number,
    token?: string,
    createdAt?: Date,
};

const UserScema = new mongoose.Schema<user>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: false },
    uid: { type: Number, required: true, unique: true, default: Math.floor(Math.random() * 100000) },
    token: { type: String, required: false },
    createdAt: { type: Date, required: false, default: Date.now() },
});

export default mongoose.model('User', UserScema);