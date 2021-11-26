import { Request, Response } from "express";
import { AuthenticationUserUseCase }   from "./AutheticationUserUseCase";

export class AuthenticationController {
    constructor(
        private autheticationUserUseCase: AuthenticationUserUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { user } = request.body;
        try {
            const authentication = await this.autheticationUserUseCase.execute({
                email: user.email,
                password: user.password
            });
            return response.status(201).send(authentication);
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}


