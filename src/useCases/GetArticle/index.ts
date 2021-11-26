import { GetArticleUseCase } from "./GetArticleUseCase";
import { GetArticleController } from "./GetArticleController"; 
import { SequelizeGetArticlesRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeGetArticleRepository";

const sequelizeGetArticlesRepository = new SequelizeGetArticlesRepository();

const getArticleUseCase = new GetArticleUseCase(
    sequelizeGetArticlesRepository
);

const getArticleController = new GetArticleController(
    getArticleUseCase
)

export { getArticleUseCase, getArticleController}