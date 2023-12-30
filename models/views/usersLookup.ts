import mongoose, { Schema } from "mongoose";
import { Post } from "../posts";
import { user } from "../users";

const pipline = [
    {
        $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "user",
            as: "posts",
        },
    },
    {
        $unset: [
            "__v",
            "_id",
            "posts.__v",
            "posts._id",
        ],
    },
]

export interface UsersLookup extends user {
    posts: Post[]
}

const UsersLookupSchema = new Schema<UsersLookup>(
    {},
    {
        autoCreate: false,
        autoIndex: false,
    }
)

const UsersLookup = mongoose.model<UsersLookup>('UsersLookup', UsersLookupSchema);

export const InitUsersLookup = async () => {
    await UsersLookup.createCollection({
        viewOn: 'users',
        pipeline: pipline
    })
}

export default UsersLookup;