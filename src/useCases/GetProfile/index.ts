import { GetUserProfileController } from "./GetUserProfileController";
import { GetUserProfileUseCase } from "./GetUserProfileUseCase";
import { SequelizeGetUserProfile } from "../../repositories/implementations/UserSequelize/SequelizeGetUserProfile" 

const sequelizeGetUserProfile = new SequelizeGetUserProfile();

const getUserProfileUseCase = new GetUserProfileUseCase(
    sequelizeGetUserProfile
);

const getUserProfileController = new GetUserProfileController(
    getUserProfileUseCase
);

export { getUserProfileUseCase, getUserProfileController}