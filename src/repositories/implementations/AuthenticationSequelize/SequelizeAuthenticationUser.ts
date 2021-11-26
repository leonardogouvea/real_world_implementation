import { IAuthenticationRepository } from '../../Authentication/IAuthenticationRepository';
import  { User } from "../../../entities/User";
const bcrypt = require('bcrypt');
const  UserModel = require('../../../models/user.model'); 
import  jwt  from 'jsonwebtoken';

require('dotenv').config();
const tokenSecret = process.env.TOKEN_SECRET;

export class SequelizeAuthenticationUser implements IAuthenticationRepository {

    async verifyUser(email: string, password: string): Promise<User>{
        const user = await UserModel.findOne({  where: { email }})
        if( !user ){
            return user;
        }
        if ( !await bcrypt.compare(password, user.password) ){
            return user;
        } 
        user.password = undefined;
        return user;
    }

    async auth(User: User): Promise<object> {
        for (const [key, value] of Object.entries(User)) {
            const userId = value.id;
            const authentication = jwt.sign({id: userId}, tokenSecret, {
                expiresIn: 86400,
            });

            const user_authentication = {
                email: value.email,
                token: authentication,
                username: value.username,
                bio: value.bio,
                image: value.image
            };

            return  user_authentication;
        }      
    }
}