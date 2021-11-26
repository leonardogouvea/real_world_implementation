import { Request, Response } from "express";
import { UpdateArticleUseCase } from "./UpdateArticleUseCase"

export class UpdateArticleController {
    constructor(
        private updateArticleUseCase: UpdateArticleUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { article } = request.body;
        const { slug } = request.params;
        try {
            const updateArticle = await this.updateArticleUseCase.execute({
                slug,
                title: article.title,
                description: article.description,
                body: article.body,
            });
            return response.status(200).send(updateArticle);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}