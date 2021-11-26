import { SequelizeAuthenticationUser } from "../../repositories/implementations/AuthenticationSequelize/SequelizeAuthenticationUser";
import { AuthenticationUserUseCase } from "./AutheticationUserUseCase";
import { AuthenticationController } from "./AuthenticationController";

const sequelizeAuthnticationUser = new SequelizeAuthenticationUser();

const authenticationUserUseCase = new AuthenticationUserUseCase(
    sequelizeAuthnticationUser
);

const authenticationController = new AuthenticationController(
    authenticationUserUseCase
)

export { authenticationUserUseCase, authenticationController}