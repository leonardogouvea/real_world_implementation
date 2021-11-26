import { Request, Response } from "express";
import { FavoriteArticleUseCase } from "./FavoriteArticleUseCase";

export class FavoriteArticlesController {
    constructor(
        private favoriteArticleUseCase: FavoriteArticleUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { slug } = request.params;
        const userId = request.userId;
        try {
            const favoriteArticle = await this.favoriteArticleUseCase.execute({
                slug,
                userId
            });
            return response.status(200).send(favoriteArticle);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}