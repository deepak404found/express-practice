import PostModel from "../models/posts";

export const createPost = async () => {
    const post = new PostModel({
        title: "dk",
        content: "21",
    });
    const post1 = new PostModel({
        title: "test",
        content: "test",
    });
    const post2 = new PostModel({
        title: "test2",
        content: "test2",
    });
    let result = await PostModel.insertMany([post, post1, post2]);
    console.log(result);
    return result;
}

export const getPosts = async () => {
    let result = await PostModel.find({});
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
