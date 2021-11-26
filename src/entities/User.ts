export class User  {
    [x: string]: any;
    public readonly id: string;

    public username: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: StringConstructor){
        Object.assign(this, props);
    }
}