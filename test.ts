import express, { NextFunction, RequestHandler } from 'express';
import { userData } from './data';
import OnboardingRouter from './routers/onboarding';
import UserRouter from './routers/user';
import { auth } from './middleware/authToken';

const app = express();


app.use(express.json());

app.use('/onboarding',OnboardingRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use(auth);
// protected routes
app.use('/user',UserRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
);

