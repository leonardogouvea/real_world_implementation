import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { user } = request.body;
        try {
            const newUser = await this.createUserUseCase.execute({
                username: user.username,
                email: user.email,
                password: user.password
            });

            return response.status(201).send(newUser);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}