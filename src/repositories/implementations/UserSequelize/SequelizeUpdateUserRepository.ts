import { IUpdateUsersRepository } from "../../User/IUpdateUserRepository";
const  UserModel = require('../../../database/models/user.model'); 
const bcrypt = require('bcrypt');

export class SequelizeUpdateUserRepository implements IUpdateUsersRepository {
    async update(params): Promise<object>{
          
        if (params.password !== undefined) {
            params.password = await bcrypt.hash(params.password, 10);
        }

        for (const [key, value] of Object.entries(params)) {

            if (value !== undefined && key != 'id') {

                switch (key) {
                    case 'username': 
                        await UserModel.update({ 
                            username: `${params.username}`, 
                        }, { where: { id: params.id }});
                    break;
                    case 'email': 
                        await UserModel.update({ 
                            email: `${params.email}`, 
                        }, { where: { id: params.id }});
                    break;
                    case 'password': 
                        await UserModel.update({ 
                            password: `${params.password}`, 
                        }, { where: { id: params.id }});
                    break;
                    case 'bio': 
                        await UserModel.update({ 
                            bio: `${params.bio}`, 
                        }, { where: { id: params.id }});
                    break;
                    case 'image': 
                        await UserModel.update({ 
                            image: `${params.image}`, 
                        }, { where: { id: params.id }});
                    break;
                }
                
            }
        }   

        const user = await UserModel.findOne({  
            where: { 
                id: params.id
            },attributes: [
                'email',
                'username',
                'bio',
                'image'
            ]   
        });
        const userModel =  {user}
        return userModel
    }
}