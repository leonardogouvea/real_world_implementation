import { ListArticlesUseCase } from "./ListArticlesUseCase";
import { ListArticlesController } from "./ListArticlesController";
import { SequelizeListArticlesRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeListArticlesRepository";

const sequelizeListArticlesRepository = new SequelizeListArticlesRepository();

const listArticlesUseCase = new ListArticlesUseCase(
    sequelizeListArticlesRepository
);

const listArticlesController = new ListArticlesController(
    listArticlesUseCase
);

export { listArticlesUseCase, listArticlesController }