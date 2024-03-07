export interface CreateUser {
    userId?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    registrationDate: string;
    role?: number;
}