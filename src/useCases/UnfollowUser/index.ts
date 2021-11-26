import { UnfollowUserUseCase } from "./UnfollowUserUseCase";
import { UnfollowUserController } from "./UnfollowUserController";
import { SequelizeUnfollowUser } from "../../repositories/implementations/UserSequelize/SequelizeUnfollowUser";

const sequelizeUnfollowUser = new SequelizeUnfollowUser();

const unfollowUserUseCase = new UnfollowUserUseCase(
    sequelizeUnfollowUser
);

const unfollowUserController = new UnfollowUserController(
    unfollowUserUseCase
);

export { unfollowUserUseCase, unfollowUserController }