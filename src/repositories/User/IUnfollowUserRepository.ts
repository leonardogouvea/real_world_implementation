export interface IUnfollowUserRepository{
    existingUserName(username: string): Promise<boolean>;
    unfollow(params: {
        followers_id: string;
        username: string;
    }): Promise<object>;
}