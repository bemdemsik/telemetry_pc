import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import userRoutes from "./entities/user/user.routes.js";
import authRoutes from "./entities/auth/auth.routes.js";

const app: Express = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    }),
);
app.use('/user', userRoutes)
app.use('/auth', authRoutes)


const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});