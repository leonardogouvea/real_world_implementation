import { IAddCommentsArticleRepository } from "../../Comment/IAddCommentsArticleRepository";
import  { Comment }  from "../../../entities/Comment";
const  ArticleModel = require('../../../database/models/article.model');
const  UserModel = require('../../../database/models/user.model');
const  CommentsModel = require('../../../database/models/comments.model'); 

export class SequelizeAddCommentArticle implements IAddCommentsArticleRepository {

    async save(params: Comment): Promise<object> {

        const article = await ArticleModel.findOne({
            where: {
                slug: params.slug
            },include: { association: 'comment'}
        });
        
        const user = await UserModel.findByPk(params.userId);

        const [ comments ] = await CommentsModel.findOrCreate({
            where: {  body: params.body, article_id:article.id, user_id: params.userId }
        }); 

        const comment = {
            id: comments.id,
            createdAt: comments.createdAt,
            updatedAt: comments.updatedAt,
            body: comments.body,
            author : {
                username: user.username,
                bio: user.bio,
                image: user.image,
                following: false
            }

        }

        return { comment: comment}
        
    }

    
}