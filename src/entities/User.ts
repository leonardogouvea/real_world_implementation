export class User  {
    [x: string]: any;
    public id: string;

    public username: string;
    public email: string;
    public password: string;
    public bio?: string;
    public image?: string;

    constructor(props: Omit<User, 'id'>, id?: StringConstructor){
        Object.assign(this, props);
    }
}