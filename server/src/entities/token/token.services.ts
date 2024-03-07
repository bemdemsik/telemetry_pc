import sqlite3 from 'sqlite3';
import {CreateUser} from "./dto/dto.create.token.js";
import {User} from "./model/model.token.js";
import {UpdateUser} from "./dto/dto.update.token.js";
class TokenService {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('../../db/pc');
    }
    saveToken(token: string, userID: number) {
        this.db.run('UPDATE Users SET refreshToken = ? WHERE userID = ? ', [token, userID]);
    }
    findToken(token: string, callback: (err: Error | null, user: { userId: number; refreshToken: string }) => void) {
        this.db.get('SELECT userId, refreshToken FROM Users WHERE refreshToken = ?', [token], callback);
    }
}

export default TokenService;
