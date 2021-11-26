import { IListArticleRepository } from "../../repositories/Article/ListArticlesRepository";
import { IListArticlesDTO } from "./ListArticlesDTO";

export class ListArticlesUseCase {

    constructor(
        private listArticleRepository: IListArticleRepository
    ){}

    async execute(data: IListArticlesDTO){
       return await this.listArticleRepository.findByListArticles(data);
    }
}