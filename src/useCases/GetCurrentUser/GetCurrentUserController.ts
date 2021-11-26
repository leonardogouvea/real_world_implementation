import { Response } from "express";
import { GetCurrentUserUseCase } from "./GetCurrentUserUseCase";

export class GetCurrentUserController {
    constructor(
        private getCurrentUserUseCase: GetCurrentUserUseCase
    ){}

    async handle(request, response: Response): Promise<Response> {

        try {
            const curretUser = await this.getCurrentUserUseCase.execute({
                userToken: request.userToken,
                userId: request.userId
            });

            return response.status(200).send(curretUser);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}