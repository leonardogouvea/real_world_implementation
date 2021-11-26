import { UpdateArticleUseCase } from "./UpdateArticleUseCase";
import { UpdateArticleController } from "./UpdateArticleController"; 
import { SequelizeUpdateArticlesRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeUpdateArticleRepository";

const sequelizeUpdateArticlesRepository = new SequelizeUpdateArticlesRepository();

const updateArticleUseCase = new UpdateArticleUseCase(
    sequelizeUpdateArticlesRepository
);

const updateArticleController = new UpdateArticleController(
    updateArticleUseCase
)

export { updateArticleUseCase, updateArticleController}