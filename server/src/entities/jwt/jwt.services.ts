import jwt from 'jsonwebtoken';
import TokenService from "../token/token.services.js";

class JWTService {
    createJWT(id: number) {
        const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_SECRET || '', { expiresIn: '1m' });
        const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET || '', { expiresIn: '1d' });
        return {
            accessToken,
            refreshToken,
        };
    }
    saveToken(token: string, userId: number) {
        const tokenService = new TokenService();
        tokenService.saveToken(token, userId);
    }
    validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET || '');
            return userData;
        } catch (err) {
            return null;
        }
    }
    validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET || '');
            return userData;
        } catch (err) {
            return null;
        }
    }
}
export default JWTService;
