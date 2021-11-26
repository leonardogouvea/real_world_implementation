import { CreateArticleUseCase } from "./CreateArticleUseCase";
import { CreateArticleController } from "./CreateArticleController"; 
import { SequelizeCreateArticleRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeCreateArticleRepository";

const sequelizeCreateArticleRepository = new SequelizeCreateArticleRepository();

const createArticleUseCase = new CreateArticleUseCase(
    sequelizeCreateArticleRepository
);

const createArticleController = new CreateArticleController(
    createArticleUseCase
)

export { createArticleUseCase, createArticleController}