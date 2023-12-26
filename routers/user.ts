import mongoose from "mongoose";
import { userData, userReq } from "../data";
import { Router } from "express";
import { createUser } from "../controller/users";

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

router.post('/create', (req, res) => {
    console.log(req.body);
    // createUser().then((result) => {
    //     res.send(result);
    // }
    // );
    res.send(req.body);
}
);

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