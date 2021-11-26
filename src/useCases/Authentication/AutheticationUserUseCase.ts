import { IAuthenticationRepository } from "../../repositories/Authentication/IAuthenticationRepository";
import { IAuthenticationUserRequestDTO } from "./AuthenticationUserDTO";
import { Authenticate } from "../../entities/Authenticate";

export class AuthenticationUserUseCase {
    constructor(
        private authenticateRepository: IAuthenticationRepository
    ){}

    async execute(data: IAuthenticationUserRequestDTO) {
        const userVerify = await this.authenticateRepository.verifyUser(data.email, data.password );

        if(!userVerify) {
            throw new Error(`Email or password invalid`);
        }
        const authentication = new Authenticate(userVerify);

        return  await this.authenticateRepository.auth(authentication);
    }
}