import { Article } from "../../entities/Article";

export interface ICreateArticleRepository{
    findBySlug(slug:string): Promise<Article>;
    save(article: Article): Promise<object>;
}