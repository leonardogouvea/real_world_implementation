import { Response } from "express";
import { FollowUserUseCase } from "./FollowUserUseCase";

export class FollowUserController {
    constructor(
        private followUserUseCase: FollowUserUseCase,
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { username } = request.params;
        const followers_id = request.userId;
        try {
            const newflow = await this.followUserUseCase.execute({
                username,
                followers_id
            });

            return response.status(200).send(newflow);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}