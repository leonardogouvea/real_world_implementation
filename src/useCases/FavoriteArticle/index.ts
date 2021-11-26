import { FavoriteArticleUseCase } from "./FavoriteArticleUseCase";
import { FavoriteArticlesController } from "./FavoriteArticleController"; 
import { SequelizeFavoriteArticlesRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeFavoriteArticlerepository";

const sequelizeFeedArticlesRepository = new SequelizeFavoriteArticlesRepository();

const favoriteArticleUseCase = new FavoriteArticleUseCase(
    sequelizeFeedArticlesRepository
);

const favoriteArticlesController = new FavoriteArticlesController(
    favoriteArticleUseCase
)

export { favoriteArticleUseCase, favoriteArticlesController}