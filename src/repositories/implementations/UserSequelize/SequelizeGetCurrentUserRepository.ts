import { IGetCurrentUserRepository } from "../../User/IGetCurrentUserRepository";
const  UserModel = require('../../../models/user.model'); 

export class SequelizeGetCurrentUserRepository implements IGetCurrentUserRepository{

    async findUserById(userToken:string, userId:string):Promise<object | null>{
        const user = await UserModel.findOne({  
            where: { 
                id: userId
            },attributes: [
                'email',
                'username',
                'bio',
                'image',
            ]
        });
        
        const userProfile = { 
            user:{
                email: user.email,
                token: userToken,
                username: user.username,
                bio: user.bio,
                image: user.image
            }
         };
        return userProfile
    }
}