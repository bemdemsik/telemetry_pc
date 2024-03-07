import express from "express";
import {body} from "express-validator";

import AuthController from "./auth.controllers.js";
import BodyMiddleware from "../../middlewares/middlewares.body.js";
import UserMiddleware from "../user/middlewares/middlewares.user.js";

const authRoutes = express.Router();
const authController = new AuthController();
const bodyMiddleware = new BodyMiddleware();
const userMiddleware = new UserMiddleware();

authRoutes.post('/login',
    body('email').isEmail(),
    body('password').isString,
    bodyMiddleware.verifyBodyFieldsErrors,
    userMiddleware.validateEmailExist,
    authController.login
);

authRoutes.post('/signup',
    body('email').isEmail(),
    body('password').isString,
    bodyMiddleware.verifyBodyFieldsErrors,
    userMiddleware.validateEmailExist,
    authController.signup
);
export default authRoutes;