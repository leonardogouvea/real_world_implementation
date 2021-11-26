import { IUnfavoriteArticleRepository } from "../../repositories/Article/UnfavoriteArticleRepository";
import { IUnfollowArticleDTO } from "./UnfavoriteArticleDTO";

export class UnfavoriteArticleUseCase {

    constructor(
        private unfavoriteArticleRepository: IUnfavoriteArticleRepository
    ){}

    async execute(data: IUnfollowArticleDTO){
       return await this.unfavoriteArticleRepository.unfavorite(data.slug, data.userId);
    }
}