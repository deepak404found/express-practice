import { createUser } from "../controller/users";
import { userData, userReq } from "../data";
import { Router } from "express";
import { auth } from "../middleware/authToken";

const router = Router();

router.put('/login', (req, res) => {
    let request: userReq = req.body;

    // check if user is authenticated
    let user = userData.find((user) => {
        return user.name === request.username && user.password === request.password;
    }
    );

    if (user) {
        // add token to user if !token
        if (!user.token) {
            let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            user.token = token;

            // add to database
            userData.forEach((user) => {
                if (user.uid === user.uid) {
                    user.token = token;
                }
            }
            );
        }

        res.send({
            message: 'Login successful!',
            user: user
        });
    } else {
        res.send('Login failed!');
    }
}
);


router.post('/signup', (req, res) => {
    const data = req.body;
    createUser(data).then((result) => {
        res.send(result);
    }
    );
}
);


export default router;