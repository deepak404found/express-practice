import mongoose, { Schema } from "mongoose";
import { userData, userReq } from "../data";
import { Router } from "express";
import { createUser } from "../controller/users";
import UserModel, { user } from '../models/users';

const router = Router();

router.post('/:id', (req, res) => {
    let id = Number(req.params.id);
    // find user by id  
    var user = userData.find((user) => {
        return user.uid === id;
    });
    res.send(user);
}
);

router.get('/:uid', async (req, res) => {
    try {
        let uid = req.params.uid;
        console.log(uid);
        let user = await UserModel.aggregate([
            {
                $match: {
                    // convert string to ObjectId
                    _id: new mongoose.Types.ObjectId(uid)
                }
            },
            {
                '$lookup': {
                    'from': 'posts',
                    'localField': '_id',
                    'foreignField': 'user',
                    'as': 'posts'
                }
            }, {
                '$project': {
                    '__v': 0,
                    'posts.user': 0,
                    'posts.__v': 0
                }
            }
        ])
        console.log(user);
        res.sendStatus(200).send(user);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.put('/update', (req, res) => {
    let uid = req.body.accessPayload.uid;
    let userReq = req.body;

    userData.forEach((user) => {
        if (user.uid === uid) {
            user.name = userReq.name;
            user.age = userReq.age;
        }
    }
    );

    res.send(userData.find((user) => { return user.uid === uid; }));
}
);

export default router;