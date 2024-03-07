import argon2 from 'argon2';
import { Request, Response } from 'express';
import JWTService from "../jwt/jwt.services.js";
import UserService from "./user.services.js";
import RoleService from "../role/role.services.js";

const jwtService = new JWTService();
const userService = new UserService();
const roleService = new RoleService();
class UserController {
    async getAllUsers(req: Request, res: Response) {
        userService.getAll((err, users) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json(users);
        });
    }

    async createUser(req: Request, res: Response) {
        const hashedPassword = await argon2.hash(req.body.password);
        userService.create(
            {
                email: req.body.email,
                password: hashedPassword,
                registrationDate: new Date().toISOString().split('T')[0],
            },
            (err, createdUser) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.status(201).json(createdUser);
            },
        );
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { firstName, lastName, email, password, roleName } = req.body;
        const hashedPassword = await argon2.hash(password);
        const role = await roleService.getRoleIdByName(roleName);

        userService.update(
            parseInt(id),
            { firstName, lastName, email, password: hashedPassword, registrationDate: new Date().toISOString(), role },
            (err) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.send('User updated successfully');
            },
        );
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        userService.delete(parseInt(id), (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.send('User deleted successfully');
        });
    }
    getUserByToken(req: Request, res: Response) {
        let userData = jwtService.validateAccessToken(req.body.accessToken);
        if (!userData || typeof userData === 'string') {
            userData = jwtService.validateRefreshToken(req.body.refreshToken);
            if (!userData || typeof userData === 'string') {
                res.status(401).json('Invalid tokens');
                return;
            }
        }
        const userId = userData.id;
        userService.getUserById(userId, (err, user) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            const userToSend = { ...user, password: undefined, refreshToken: undefined };
            res.status(201).json({ user: userToSend });
        });
    }
}

export default UserController;