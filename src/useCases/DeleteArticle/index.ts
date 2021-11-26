import { DeleteArticleUseCase } from "./DeleteArticleUseCase";
import { DeleteArticleController } from "./DeleteArticleController"; 
import { SequelizeDeleteArticleRepository } from "../../repositories/implementations/ArticleSequelize/SequelizeDeleteArticleRespository";

const sequelizeDeleteArticleRepository = new SequelizeDeleteArticleRepository();

const deleteArticleUseCase = new DeleteArticleUseCase(
    sequelizeDeleteArticleRepository
);

const deleteArticleController = new DeleteArticleController(
    deleteArticleUseCase
)

export { deleteArticleUseCase, deleteArticleController}