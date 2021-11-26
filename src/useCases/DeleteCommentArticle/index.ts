import { DeleteCommentArticleUseCase } from "./DeleteCommentArticleUseCase";
import { DeleteCommentArticleController } from "./DeleteCommentArticleController"; 
import { SequelizeDeleteCommentArticle } from "../../repositories/implementations/CommentSequelize/SequelizeDeleteCommentArticle";



const sequelizeDeleteCommentArticle = new SequelizeDeleteCommentArticle();

const deleteCommentArticleUseCase = new DeleteCommentArticleUseCase(
    sequelizeDeleteCommentArticle
);

const deleteCommentArticleController = new DeleteCommentArticleController(
    deleteCommentArticleUseCase
)

export { deleteCommentArticleUseCase, deleteCommentArticleController}