export interface IGetCommentsArticleRepository{
    findCommentsBySlug(slug: string): Promise<object>;
}