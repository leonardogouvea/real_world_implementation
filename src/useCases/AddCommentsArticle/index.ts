import { AddCommentsArticleUseCase } from "./AddCommentsArticleUseCase";
import { AddCommentsArticleController } from "./AddCommentsArticleController"; 
import { SequelizeAddCommentArticle } from "../../repositories/implementations/CommentSequelize/SequelizeAddCommentArticle";

const sequelizeAddCommentArticle = new SequelizeAddCommentArticle();

const addCommentsArticleUseCase = new AddCommentsArticleUseCase(
    sequelizeAddCommentArticle
);

const addCommentsArticleController = new AddCommentsArticleController(
    addCommentsArticleUseCase
)

export { addCommentsArticleUseCase, addCommentsArticleController}