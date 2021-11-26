export interface ICreateArticleRequestDTO {
    userId: string;
    newSlug: string;
    title: string;
    description: string;
    body: string;
    tagList?: [];
    favorited?: boolean;
}