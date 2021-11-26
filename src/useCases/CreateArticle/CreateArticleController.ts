import { Request, Response } from "express";
import { CreateArticleUseCase } from "./CreateArticleUseCase";
const slug = require('slug')

export class CreateArticleController {
    constructor(
        private createArticleUseCase: CreateArticleUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { article } = request.body;
        const newSlug = slug(article.title);
        const userId = request.userId;
        try {
            const newArticle = await this.createArticleUseCase.execute({
                userId,
                newSlug,
                title: article.title,
                description: article.description,
                body: article.body,
                tagList: article.tagList,
                favorited: article.favorited,
            });

            return response.status(201).send(newArticle);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}