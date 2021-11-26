import { Response } from "express";
import { FeedArticlesUseCase } from "./FeedArticlesUseCase";

export class FeedArticlesController {
    constructor(
        private feedArticlesUseCase: FeedArticlesUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { limit, offset } = request.params;
        try {
            const articles = await this.feedArticlesUseCase.execute({
                limit: limit,
                offset: offset
            });
            return response.status(200).send(articles);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}