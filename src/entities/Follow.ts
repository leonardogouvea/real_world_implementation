export class Follow  {

    public followers_id: string;
    public username: string;

    constructor(props: Omit<Follow, ''>){
        Object.assign(this, props);
    }
}