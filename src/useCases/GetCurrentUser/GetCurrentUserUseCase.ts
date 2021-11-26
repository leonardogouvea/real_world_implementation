import { IGetCurrentUserRepository } from "../../repositories/User/IGetCurrentUserRepository";
import { IGetCurrentUserDTO } from "./GetCurrentUserDTO";

export class GetCurrentUserUseCase {
    constructor(
        private getCurrentUserRepository: IGetCurrentUserRepository
    ){}

    async execute(data: IGetCurrentUserDTO){
       const currentUser = await this.getCurrentUserRepository.findUserById(data.userToken, data.userId);

       if ( !currentUser ){
            throw new Error(`User does not exists`);
       }
       return currentUser;
    }
}