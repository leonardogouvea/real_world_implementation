import { IGetCommentsArticleRepository } from "../../Comment/IGetCommentsArticleRepository";
const  ArticleModel = require('../../../models/article.model');
const UserModel = require('../../../models/user.model');

export class SequelizeGetCommentsArticle implements IGetCommentsArticleRepository {

    async findCommentsBySlug(slug: string): Promise<object> {

        const article = await ArticleModel.findOne({
            where: {
                slug: slug
            },include: { association: 'comment'}
        });

        let comments = [];
    
        for (const [key, value] of Object.entries(article.comment)) {

            const user = await UserModel.findOne({
                where: {
                    id: value['user_id']
                },attributes: [
                    'username',
                    'bio',
                    'image'
                ]
            });

            let commentsAll = {
                id: value['id'],
                createdAt: value['createdAt'],
                updatedAt: value['updatedAt'],
                body: value['body'],
                author: {
                    username: user.username,
                    bio: user.bio,
                    image: user.image,
                    following: false,
                } 
            }
            comments.push(commentsAll)

        }

        return { comments}
    }
    
}