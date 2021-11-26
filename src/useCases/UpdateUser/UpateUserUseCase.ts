import { IUpdateUsersRepository } from "../../repositories/User/IUpdateUserRepository";
import { ICreateUserRequestDTO } from "./UpdateUserDTO";
export class UpdateUserUseCase {

    constructor(
        private updateUsersRepository: IUpdateUsersRepository
    ){}

    async execute(data: ICreateUserRequestDTO){
       return await this.updateUsersRepository.update(data);
    }
}
