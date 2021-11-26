import { Request, Response } from "express";
import { ListArticlesUseCase } from "./ListArticlesUseCase";

export class ListArticlesController {
    constructor(
        private listArticlesUseCase: ListArticlesUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { tag, author, favorited, limit, offset} = request.query;
            const where = request.query;
            if (tag) where.tagList = tag;
            if (author) where.author = author;
            if (favorited) where.favorited = favorited;
            if (limit) where.limit = limit;
            if (offset) where.offset = offset;

            const unfollow = await this.listArticlesUseCase.execute({
                where
            });

            return response.status(200).send(unfollow);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}