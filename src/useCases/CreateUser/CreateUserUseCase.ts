import { ICreateUsersRepository } from "../../repositories/User/ICreateUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
    constructor(
        private usersRepository: ICreateUsersRepository
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error(`User ${data.email} already exists`);
        }
        const user = new User(data);
        return await this.usersRepository.save(user);
    }
}