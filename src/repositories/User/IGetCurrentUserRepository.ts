export interface IGetCurrentUserRepository{
    findUserById(userToken:string, userId:string): Promise<object | null>;
}