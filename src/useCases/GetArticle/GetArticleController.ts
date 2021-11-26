import { Request, Response } from "express";
import { GetArticleUseCase } from "./GetArticleUseCase";

export class GetArticleController {
    constructor(
        private getArticleUseCase: GetArticleUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params;
        try {
            const article = await this.getArticleUseCase.execute({
                slug
            });
            return response.status(200).send(article);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}