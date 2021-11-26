export interface IUpdateArticleRepository{
    findBySlug(slug:string): Promise<boolean>
    update(params: {
        slug: string;
        newSlug?: string;
        title?: string;
        description?: string;
        body?: string;
    }): Promise<object>;
}