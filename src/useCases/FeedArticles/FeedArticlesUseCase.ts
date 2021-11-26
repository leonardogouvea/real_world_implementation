import { IFeedArticleRepository } from "../../repositories/Article/FeedArticleRepository";
import { IFeedArticleDTO } from "./FeedArticlesDTO";

export class FeedArticlesUseCase {
    constructor(
        private feedArticleRepository: IFeedArticleRepository
    ){}

    async execute(data: IFeedArticleDTO) {
        return await this.feedArticleRepository.findArticles(data.limit, data.offset);;
    }
}