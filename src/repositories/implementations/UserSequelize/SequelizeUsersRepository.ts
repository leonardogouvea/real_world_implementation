import { ICreateUsersRepository } from "../../User/ICreateUsersRepository";
import  { User }  from "../../../entities/User";
const bcrypt = require('bcrypt');
const  UserModel = require('../../../models/user.model');
import  jwt  from 'jsonwebtoken';

require('dotenv').config();
const tokenSecret = process.env.TOKEN_SECRET; 

export class SequelizeUsersRepository implements ICreateUsersRepository {

    async findByEmail(email: string): Promise<User> {
        const user_email = await UserModel.findOne({  where: { email }})
        return user_email;
    }

    async store(params): Promise<object>{
        const {username, email, password} = params;
        const password_hash = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({username, email, password: password_hash});

        const authentication = jwt.sign({id: newUser.id}, tokenSecret, {
            expiresIn: 86400,
        });

        const userProfile = {
            user: {
                email: newUser.email,
                username: newUser.username,
                token: authentication,
                bio: newUser.bio,
                image: newUser.image
            }
        };

        return userProfile;
    }

    async save(user: User): Promise<object> {
        return this.store(user);
    }

    
}

