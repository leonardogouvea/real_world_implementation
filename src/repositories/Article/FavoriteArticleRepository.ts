export interface IFavoriteArticleRepository{
    save(slug: string, userId: string): Promise<object>;
}