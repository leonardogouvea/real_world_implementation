import { IFavoriteArticleRepository } from "../../repositories/Article/FavoriteArticleRepository";
import { IFavoriteArticleDTO } from "./FavoriteArticleDTO";

export class FavoriteArticleUseCase {
    constructor(
        private favoriteArticleRepository: IFavoriteArticleRepository
    ){}

    async execute(data: IFavoriteArticleDTO) {
        return await this.favoriteArticleRepository.save(data.slug, data.userId);;
    }
}