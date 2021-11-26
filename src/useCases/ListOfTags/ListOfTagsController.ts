import { Response } from "express";
import { ListOfTagsUseCase } from "./ListOfTagsUseCase";

export class ListOfTagsController {
    constructor(
        private uistOfTagsUseCase: ListOfTagsUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const userId = request.userId;
        try {
            const unfollow = await this.uistOfTagsUseCase.execute({
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