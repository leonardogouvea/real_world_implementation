import { Response } from "express";
import { UnfavoriteArticleUseCase } from "./UnfavoriteArticleUseCase";

export class UnfavoriteArticleController {
    constructor(
        private unfavoriteArticleUseCase: UnfavoriteArticleUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { slug } = request.params;
        const userId = request.userId;
        try {
            const unfollow = await this.unfavoriteArticleUseCase.execute({
                slug,
                userId,
            });

            return response.status(200).send(unfollow);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}