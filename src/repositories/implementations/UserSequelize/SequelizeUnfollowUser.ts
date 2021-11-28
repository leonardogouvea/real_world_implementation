import { IUnfollowUserRepository } from "../../User/IUnfollowUserRepository";
const  UserModel = require('../../../database/models/user.model');
const  FollowModel = require('../../../database/models/followers.model'); 

export class SequelizeUnfollowUser implements IUnfollowUserRepository {

    async  existingUserName(username: string): Promise<boolean> {

        if (await UserModel.findOne({where: {username: username}})){ 
            return true
        }
        return false;
    }

    async unfollow(params): Promise<object> {

        const user = await UserModel.findOne({  
            where: { 
                username: params.username
            },
            include: { association: 'follow'}     
        });

        await FollowModel.destroy({
            where: { 
                followers_id: params.followers_id, following_id: user.id
            }
        });
        const userProfile = {
            profile: {
                username: user.username,
                bio: user.bio,
                image: user.image,
                following: user.follow.length
            }
        };
        return userProfile
        
    }
    
}