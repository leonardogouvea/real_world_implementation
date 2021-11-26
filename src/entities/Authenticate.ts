export class Authenticate  {
    public readonly id: string;

    public username: string;
    public email: string;
    public password: string;

    constructor(props: Omit<Authenticate, 'id'>, id?: StringConstructor){
        Object.assign(this, props);
    }
}