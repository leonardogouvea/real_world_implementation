export interface IGetUserProfileRepository{
    findUserByName(username:string): Promise<object | null>;
}