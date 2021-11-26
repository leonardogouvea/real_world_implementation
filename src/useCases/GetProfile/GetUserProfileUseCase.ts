import { IGetUserProfileRepository } from "../../repositories/User/IGetUserProfileRepository";
import { GetUserProfileDTO } from "./GetUserProfileDTO";

export class GetUserProfileUseCase {
    constructor(
        private getUserProfileRepository: IGetUserProfileRepository
    ){}

    async execute(data: GetUserProfileDTO){
       const userProfile = await this.getUserProfileRepository.findUserByName(data.username);

       if ( !userProfile ){
            throw new Error(`User ${data.username} does not exists`);
       }

       return userProfile;

    }
}