import { Request, Response } from "express";
import { DeleteArticleUseCase } from "./DeleteArticleUseCase";

export class DeleteArticleController {
    constructor(
        private deleteArticleUseCase: DeleteArticleUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params;
        try {
            await this.deleteArticleUseCase.execute({
                slug
            });
            return response.status(200).send();
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}