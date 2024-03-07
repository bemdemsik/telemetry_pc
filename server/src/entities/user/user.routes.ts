import express from 'express';
import { body } from 'express-validator';
import UserMiddleware from "./middlewares/middlewares.user.js";
import UserController from "./user.controllers.js";
import BodyMiddleware from "../../middlewares/middlewares.body.js";

const userRoutes = express.Router();
const userController = new UserController();
const userMiddleware = new UserMiddleware();
const bodyMiddleware = new BodyMiddleware();
userRoutes.get('/', userController.getAllUsers);
userRoutes.post(
    '/',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('Must include password (5+ characters)'),
    bodyMiddleware.verifyBodyFieldsErrors,
    userMiddleware.validateEmailExist,
    userController.createUser,
);
userRoutes.put('/:id', userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);
userRoutes.post(
    '/profile',
    body('accessToken').isString(),
    body('refreshToken').isString(),
    bodyMiddleware.verifyBodyFieldsErrors,
    userController.getUserByToken,
);

export default userRoutes;
