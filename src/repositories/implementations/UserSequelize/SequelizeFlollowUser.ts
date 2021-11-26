import { IFollowUserRepository } from "../../User/IFollowUserRepository";
import  { Follow }  from "../../../entities/Follow";
const  UserModel = require('../../../models/user.model');
const  FollowModel = require('../../../models/followers.model'); 

export class SequelizeFollowUser implements IFollowUserRepository {

    async existingFollower(follow: Follow): Promise<object | null >{

        const user = await UserModel.findOne({  
            where: { 
                username: follow.username
            },
            include: { association: 'follow'}     
        });

        const userFollow = await FollowModel.findOne({  
            where: { 
                followers_id: follow.followers_id, following_id: user.id
            }   
        });

        if (userFollow){
            return userFollow
        }
        
        return null;
    }

    async existingUserName(follow: Follow): Promise<boolean> {

        if (await UserModel.findOne({where: { username: follow.username }})){
            return true
        }
        
        return false;
    }

    async save(follow: Follow): Promise<object> {
        const user = await UserModel.findOne({  
            where: { 
                username: follow.username
            },
            include: { association: 'follow'}     
        });

        if(!await FollowModel.create({followers_id: follow.followers_id, following_id: user.id})){
            return null;
        } 

        if (user){
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

    
}