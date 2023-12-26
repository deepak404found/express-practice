import UserModel from '../models/users';

export const createUser = async () => {
    const user = new UserModel({
        name: "dk",
        age: 21,
        uid: "1"
    });
    let result = await UserModel.create(user);
    console.log(result);
    return result;
}
