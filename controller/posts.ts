import PostModel, { Post } from "../models/posts";

export const createPost = async (data: Post) => {
    try {
        let result = await PostModel.create(data);
        console.log(result);
        return result;

    } catch (error: any) {
        console.log(error);
        return error
    }
}

export const getPosts = async () => {
    // give latest first
    let result = await PostModel.find({}).countDocuments();
    console.log(result);
    return result;
}


export const getPost = async (id: string) => {
    let result = await PostModel.findById(id);
    console.log(result);
    return result;
}

export const getPostByTitle = async (title: string) => {
    let result = await PostModel.find({ title: title });
    console.log(result);
    return result;
}

export const updatePost = async (id: string) => {
    let result = await PostModel.findByIdAndUpdate(id, { title: "updated1" }, { new: true });
    console.log(result);
    return result;
}

export const deletePost = async (id: string) => {
    let result = await PostModel.findByIdAndDelete(id);
    console.log(result);
    return result;
}
