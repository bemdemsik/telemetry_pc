import sqlite3 from "sqlite3";

class RoleServices {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('../../db/pc');
    }

    async getRoleIdByName(roleName: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.db.get('SELECT id FROM role WHERE name = ?', [roleName], (err, id: number) => {
                if (err) {
                    reject(err);
                } else if (!id) {
                    reject(new Error(`Role with name '${roleName}' not found`));
                } else {
                    resolve(id);
                }
            });
        });
    }
}
export default RoleServices;