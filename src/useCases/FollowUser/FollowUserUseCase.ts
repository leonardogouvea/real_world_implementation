import { Follow } from "../../entities/Follow";
import { IFollowUserRepository } from "../../repositories/User/IFollowUserRepository";
import { IFollowUserDTO } from "./FollowUserDTO";

export class FollowUserUseCase{

    constructor(
        private followUserRepository: IFollowUserRepository,
    ){}
    
    async execute(data: IFollowUserDTO) {

        if(!await this.followUserRepository.existingUserName(data)){
            throw new Error(`User ${data.username} does not exist`);
        }

        if (await this.followUserRepository.existingFollower(data) !== null) {
            throw new Error(`You are already following this user ${data.username}`);
        }

        const username = new Follow(data);
        const follow = await this.followUserRepository.save(username);


        return follow;
    }
}