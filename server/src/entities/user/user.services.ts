import sqlite3 from 'sqlite3';
import {CreateUser} from "./dto/dto.create.user.js";
import {User} from "./model/model.user.js";
import {UpdateUser} from "./dto/dto.update.user.js";
class UserService {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('../../db/pc');
    }
    create(user: CreateUser, callback: (err: Error | null, user?: User) => void) {
        console.log(user);
        this.db.run(
            'INSERT INTO users (email, password, registrationDate) VALUES (?, ?, ?)',
            [user.email, user.password, user.registrationDate],
            function (err) {
                if (err) {
                    callback(err);
                    return;
                } else {
                    callback(null, {
                        userId: this.lastID,
                        email: user.email,
                        password: user.password,
                        registrationDate: user.registrationDate,
                    });
                }
            },
        );
    }
    getAll(callback: (err: Error | null, rows: User[]) => void) {
        this.db.all('SELECT u.*, r.RoleName AS roleName FROM users u LEFT JOIN roles r ON u.Role = r.RoleID', callback);
    }
    delete(id: number, callback: (err: Error | null) => void) {
        this.db.run('DELETE FROM users WHERE UserID = ?', [id], callback);
    }
    update(id: number, user: UpdateUser, callback: (err: Error | null) => void) {
        this.db.run(
            'UPDATE users SET FirstName = ?, LastName = ?, Email = ?, Password = ?, Role = ? WHERE UserID = ?',
            [user.firstName, user.lastName, user.email, user.password, user.role, id],
            callback,
        );
    }
    getUserByEmail(email: string, callback: (err: Error | null, user: User) => void) {
        this.db.get('SELECT * FROM Users WHERE Email = ?', [email], callback);
    }
    getUserById(userId: string, callback: (err: Error | null, user: User) => void) {
        this.db.get('SELECT * FROM Users WHERE userId = ?', [userId], callback);
    }
}

export default UserService;
