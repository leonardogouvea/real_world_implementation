export interface IGetArticleRepository{
    findArticleBySlug(slug:string): Promise< object | false >;
}