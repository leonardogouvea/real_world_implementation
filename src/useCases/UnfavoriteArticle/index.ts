import { UnfavoriteArticleUseCase } from "./UnfavoriteArticleUseCase";
import { UnfavoriteArticleController } from "./UnfavoriteArticleController";
import { SequelizeUnfavoriteArticleRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeUnfavoriteArticleRepository";

const sequelizeUnfavoriteArticleRepository = new SequelizeUnfavoriteArticleRepository();

const unfavoriteArticleUseCase = new UnfavoriteArticleUseCase(
    sequelizeUnfavoriteArticleRepository
);

const unfavoriteArticleController = new UnfavoriteArticleController(
    unfavoriteArticleUseCase
);

export { unfavoriteArticleUseCase, unfavoriteArticleController }