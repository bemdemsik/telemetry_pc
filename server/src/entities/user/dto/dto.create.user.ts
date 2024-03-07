export interface CreateUser {
    userId?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    access: number;
    role?: number;
}