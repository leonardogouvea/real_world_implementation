import { FeedArticlesUseCase } from "./FeedArticlesUseCase";
import { FeedArticlesController } from "./FeedArticlesController"; 
import { SequelizeFeedArticlesRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeFeedArticlesController";



const sequelizeFeedArticlesRepository = new SequelizeFeedArticlesRepository();

const feedArticlesUseCase = new FeedArticlesUseCase(
    sequelizeFeedArticlesRepository
);

const feedArticlesController = new FeedArticlesController(
    feedArticlesUseCase
)

export { feedArticlesUseCase, feedArticlesController}