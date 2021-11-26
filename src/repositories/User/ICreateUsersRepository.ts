import { User } from "../../entities/User";

export interface ICreateUsersRepository{
    findByEmail(email:string): Promise<User>;
    save(user: User): Promise<object>;
    store(params): Promise<object>;
}