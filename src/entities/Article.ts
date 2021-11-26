export class Article  {
    public readonly id: string;

    public userId: string;
    public newSlug: string;
    public title: string;
    public description: string;
    public body: string;
    public tagList?: [];
    public favorited?: boolean;

    constructor(props: Omit<Article, 'id'>, id?: StringConstructor){
        Object.assign(this, props);
    }
}