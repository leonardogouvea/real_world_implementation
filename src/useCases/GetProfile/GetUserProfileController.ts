import { Request, Response } from "express";
import { GetUserProfileUseCase } from "./GetUserProfileUseCase";
export class GetUserProfileController {
    constructor(
        private getUserProfileUseCase: GetUserProfileUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        try {
            const userProfile = await this.getUserProfileUseCase.execute({
                username,
            });

            return response.status(200).send(userProfile);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}