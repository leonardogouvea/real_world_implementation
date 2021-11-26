import { GetCurrentUserController } from "./GetCurrentUserController";
import { GetCurrentUserUseCase } from "./GetCurrentUserUseCase";
import { SequelizeGetCurrentUserRepository } from "../../repositories/implementations/UserSequelize/SequelizeGetCurrentUserRepository" 

const sequelizeGetCurrentUserRepository = new SequelizeGetCurrentUserRepository();

const getCurrentUserUseCase = new GetCurrentUserUseCase(
    sequelizeGetCurrentUserRepository
);

const getCurrentUserController = new GetCurrentUserController(
    getCurrentUserUseCase
);

export { getCurrentUserUseCase, getCurrentUserController}