import { IUnfollowUserRepository } from "../../repositories/User/IUnfollowUserRepository";
import { IUnfollowUserDTO } from "./UnfollowUserDTO";

export class UnfollowUserUseCase {

    constructor(
        private unfollowUserRepository: IUnfollowUserRepository
    ){}

    async execute(data: IUnfollowUserDTO){

        if(!await this.unfollowUserRepository.existingUserName(data.username)){
            throw new Error(`User ${data.username} does not exist`);
        }

       return await this.unfollowUserRepository.unfollow(data);
    }
}