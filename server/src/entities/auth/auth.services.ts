import sqlite3 from 'sqlite3';

class AuthService {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('../../db/pc');
    }

}

export default AuthService;
