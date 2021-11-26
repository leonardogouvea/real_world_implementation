import { Response } from "express";
import { UnfollowUserUseCase } from "./UnfollowUserUseCase";

export class UnfollowUserController {
    constructor(
        private unfollowUserUseCase: UnfollowUserUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { username } = request.params;
        const followers_id = request.userId;
        try {
            const unfollow = await this.unfollowUserUseCase.execute({
                username,
                followers_id
            });

            return response.status(200).send(unfollow);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}