import { Request, Response } from "express";
import { DeleteCommentArticleUseCase } from "./DeleteCommentArticleUseCase";

export class DeleteCommentArticleController {
    constructor(
        private deleteCommentArticleUseCase: DeleteCommentArticleUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { slug, id } = request.params;
        try {
            await this.deleteCommentArticleUseCase.execute({
                slug,
                id
            });
            return response.status(200).send();
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}