import { GetCommentsArticleController } from "./GetCommentsArticleController";
import { GetCommentsArticleUseCase } from "./GetCommentsArticleUseCase";
import { SequelizeGetCommentsArticle } from "../../repositories/implementations/CommentSequelize/SequelizeGetCommentsArticle" 

const sequelizeGetCommentsArticle = new SequelizeGetCommentsArticle();

const getCommentsArticleUseCase = new GetCommentsArticleUseCase(
    sequelizeGetCommentsArticle
);

const getCommentsArticleController = new GetCommentsArticleController(
    getCommentsArticleUseCase
);

export { getCommentsArticleUseCase, getCommentsArticleController}