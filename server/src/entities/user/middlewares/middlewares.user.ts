import { NextFunction, Request, Response } from 'express';
import UserService from "../user.services.js";
import {validationResult} from "express-validator";

class UserMiddleware {
    validateEmailExist(req: Request, res: Response, next: NextFunction) {
        const userService = new UserService();
        console.log(req.body);
        userService.getUserByEmail(req.body.email, async (err, user) => {
            console.log(user);
            if (user) {
                res.status(400).send({ error: 'User email already exists!' });
            } else {
                next();
            }
        });
    }
}

export default UserMiddleware;