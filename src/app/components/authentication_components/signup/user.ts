import { $$ } from "protractor";

export class User {

    id: string;
    email: string;
    password: string;
    name: string;
    mobileNumber: string;
    companyName: string;
    uuid: string;

    constructor() {
    }

    public static isNull(user: User): boolean {
        return user.email === null &&
            user.id === null &&
            user.mobileNumber === null &&
            user.companyName === null &&
            user.name === null &&
            user.uuid == null 
            
    }
}