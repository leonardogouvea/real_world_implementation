export interface IUpdateUsersRepository{
    update(params: {
        username:string,
        email:string,
        password:string,
        bio:string,
        image:string,
     }): Promise<object>;
}