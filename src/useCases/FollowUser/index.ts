import { FollowUserUseCase } from "./FollowUserUseCase";
import { FollowUserController } from "./FollowUserController";
import { SequelizeFollowUser } from "../../repositories/implementations/UserSequelize/SequelizeFlollowUser";

const sequelizeFollowUser = new SequelizeFollowUser();

const followUserUseCase = new FollowUserUseCase(
    sequelizeFollowUser
);

const followUserController = new FollowUserController(
    followUserUseCase
);

export { followUserUseCase, followUserController }