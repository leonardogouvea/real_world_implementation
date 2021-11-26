import { Response } from "express";
import { AddCommentsArticleUseCase } from "./AddCommentsArticleUseCase";

export class AddCommentsArticleController {
    constructor(
        private addCommentsArticleUseCase: AddCommentsArticleUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { slug } = request.params;
        const { comment } = request.body;
        try {
            const newArticle = await this.addCommentsArticleUseCase.execute({
                slug,
                body: comment.body,
                userId: request.userId
            });
            return response.status(201).send(newArticle);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}