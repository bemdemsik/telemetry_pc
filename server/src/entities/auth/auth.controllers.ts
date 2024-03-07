import argon2 from "argon2";
import { Request, Response} from "express";

import JWTService from "../jwt/jwt.services.js";
import UserService from "../user/user.services.js";

const jwtService = new JWTService();
class AuthController {
    login(req: Request, res: Response) {
        const { accessToken, refreshToken } = jwtService.createJWT(req.body.userId);
        jwtService.saveToken(refreshToken, req.body.userId);
        res.status(201).json({ token: { accessToken, refreshToken } });
    }
    async signup(req: Request, res: Response) {
        const userService = new UserService();
        const hashedPassword = await argon2.hash(req.body.password);
        userService.create(
            {
                email: req.body.email,
                password: hashedPassword,
                registrationDate: new Date().toISOString().split('T')[0],
            },
            (err, createdUser) => {
                console.log(createdUser);
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                if (!createdUser) {
                    res.status(500).json({ error: 'User creation failed' });
                    return;
                }
                const { accessToken, refreshToken } = jwtService.createJWT(createdUser.userId);
                jwtService.saveToken(refreshToken, createdUser.userId);
                res.status(201).json({ token: { accessToken, refreshToken } });
            },
        );
    }
}

export default AuthController;