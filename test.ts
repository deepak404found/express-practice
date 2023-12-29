import express from 'express';
import mongoose from 'mongoose';
import OnboardingRouter from './routers/onboarding';
import UserRouter from './routers/user';
import PostRouter from './routers/posts';
import { createUser } from './controller/users';
import { auth } from './middleware/authToken';

const app = express();


app.use(express.json());

app.use('/onboarding', OnboardingRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

// app.use(auth);
// protected routes
app.use('/user', UserRouter);


app.use(PostRouter);

function main() {
    mongoose.connect('mongodb+srv://dk404:LwsRm2WWJJbStvlL@cluster0.h33roeb.mongodb.net/test1?retryWrites=true&w=majority').then(
        () => {
            console.log('Connected to DB');
            app.listen(3000, () => {
                console.log('Example app listening on port 3000!');
            }
            );
        }
    ).catch(
        (err) => {
            console.log(err, 'Error connecting to DB');
        }
    )
}

main();