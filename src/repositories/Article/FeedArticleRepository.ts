export interface IFeedArticleRepository{
    findArticles(
        limit?:string, 
        offset?:string
    ): Promise< object | false >;
}