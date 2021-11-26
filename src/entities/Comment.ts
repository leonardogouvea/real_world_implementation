export class Comment  {

    public slug: string;
    public body: string;
    public userId: string;

    constructor(props: Omit<Comment, ''>){
        Object.assign(this, props);
    }
}