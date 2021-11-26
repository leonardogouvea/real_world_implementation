export interface IDeleteArticleRepository{
    findBySlug(slug:string): Promise<boolean>;
    delete(slug: string): Promise<void>;
}