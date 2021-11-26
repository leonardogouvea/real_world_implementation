import  { User  } from "../../entities/User";
require('dotenv').config();


export interface IAuthenticationRepository{
    verifyUser(email: string, password: string): Promise<User>;
    auth(User: User): Promise<object>;
} 