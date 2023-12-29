import UserModel, { user } from '../models/users';

export const createUser = async (data: user) => {
    let result = await UserModel.create(data);
    console.log(result);
    return result;
}
