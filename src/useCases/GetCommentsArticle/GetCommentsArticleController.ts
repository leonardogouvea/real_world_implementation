import { Response } from "express";
import { GetCommentsArticleUseCase } from "./GetCommentsArticleUseCase";

export class GetCommentsArticleController {
    constructor(
        private getCommentsArticleUseCase: GetCommentsArticleUseCase
    ){}

    async handle(request, response: Response): Promise<Response> {
            const { slug } = request.params;
        try {
            const comments = await this.getCommentsArticleUseCase.execute({
                slug
            });

            return response.status(200).send(comments);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}