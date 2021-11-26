import { Response } from "express";
import { UpdateUserUseCase } from "./UpateUserUseCase"

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}

    async handle(request, response: Response): Promise<Response> {
        const { user } = request.body;
        const id = request.userId;
        try {
            const updateUser = await this.updateUserUseCase.execute({
                id,
                username: user.username,
                email: user.email,
                password: user.password,
                bio: user.bio,
                image: user.image
            });

            return response.status(200).send(updateUser);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}