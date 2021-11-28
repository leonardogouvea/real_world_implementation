import { IAuthenticationRepository } from '../../Authentication/IAuthenticationRepository';
import  { User } from "../../../entities/User";
import  jwt  from 'jsonwebtoken';
const bcrypt = require('bcrypt');
const  UserModel = require('../../../database/models/user.model'); 
const tokenSecret = process.env.TOKEN_SECRET;
require('dotenv').config();

export class SequelizeAuthenticationUser implements IAuthenticationRepository {

    async verifyUser(email: string, password: string): Promise<User>{
        const user = await UserModel.findOne({  
            where: { email },
            attributes: [
                'id',
                'username',
                'password',
                'email',
                'bio',
                'image'
            ]
        });
        
        if( !user ){
            return user;
        }
        if ( !await bcrypt.compare(password, user.password) ){
            return user;
        } 
        
        user.password = undefined;
        return user.dataValues;
    }

    async auth(user: User): Promise<object> {

        const authentication = jwt.sign({id: user.id}, tokenSecret, {
            expiresIn: 86400,
        });
        
        delete user.id;
        user.token = authentication

        return  {user: user};
    }
}