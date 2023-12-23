import { RequestHandler } from "express";
import { userData } from "../data";

export const auth:RequestHandler = (req, res, next) => {
    console.log('Auth middleware');

    // check if user is authenticated
    if (!req.headers.authorization) {
        res.status(401).send('Unauthorized');
        return;
    }

    // check if token is valid
    let token = req.headers.authorization;
    let user = userData.find((user) => {
        return user.token === token;
    }
    );

    if (!user) {
        res.status(404).send('User not found');
        return;
    }

    let accessPayload = {
        uid: user.uid,
        name: user.name
    };

    req.body.accessPayload = accessPayload;
    
    next();
}