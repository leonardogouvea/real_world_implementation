import { Follow } from "../../entities/Follow";

export interface IFollowUserRepository{
    existingFollower(follow: Follow): Promise<object | null >;
    existingUserName(follow: Follow): Promise<boolean>;
    save(follow: Follow): Promise<object>;
}