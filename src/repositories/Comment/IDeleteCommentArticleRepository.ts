export interface IDeleteCommentArticleRepository{
    delete(slug: string, id: string): Promise<void>;
}