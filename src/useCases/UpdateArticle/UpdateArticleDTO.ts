export interface IUpdateArticleDTO {
    slug: string;
    newSlug?: string;
    title?: string;
    description?: string;
    body?: string;
}