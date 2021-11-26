export interface IListArticleRepository{
    findByListArticles(url: object): Promise<object>;
}