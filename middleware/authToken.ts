import { RequestHandler } from "express";
import { userData } from "../data";
import UserModel from '../models/users';

export const auth: RequestHandler = async (req, res, next) => {
    console.log('Auth middleware');

    // check if user is authenticated
    if (!req.headers.authorization) {
        res.status(401).send('Unauthorized');
        return;
    }

    // check if token is valid
    let token = req.headers.authorization;
    let user = await UserModel.findOne({ token: token })

    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    console.log(user, 'user');

    let accessPayload = {
        uid: user.uid,
        name: user.name,
    };
    console.log(accessPayload);

    req.body.accessPayload = accessPayload;

    next();
}