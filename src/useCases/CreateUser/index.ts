import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController"; 
import { SequelizeUsersRepository } from "../../repositories/implementations/UserSequelize/SequelizeUsersRepository";

const sequelizeUsersRepository = new SequelizeUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    sequelizeUsersRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}