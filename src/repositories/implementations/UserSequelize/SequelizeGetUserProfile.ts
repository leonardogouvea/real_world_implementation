import { IGetUserProfileRepository } from "../../User/IGetUserProfileRepository";
const  UserModel = require('../../../database/models/user.model'); 

export class SequelizeGetUserProfile implements IGetUserProfileRepository{

    async findUserByName(username:string):Promise<object | null>{

        const user = await UserModel.findOne({  
            where: { 
                username: username
            },
            include: { association: 'follow'}     
        });
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
        return null
    }
}