export interface IUnfavoriteArticleRepository{
    unfavorite(slug: string, userId: string);
}