import { IDeleteCommentArticleRepository } from "../../Comment/IDeleteCommentArticleRepository";
const  ArticleModel = require('../../../database/models/article.model'); 
const  CommentsModel = require('../../../database/models/comments.model'); 

export class SequelizeDeleteCommentArticle implements IDeleteCommentArticleRepository {

    async delete(slug: string, id: string): Promise<void> {

        const article = await ArticleModel.findOne({
            where: {
                slug:slug
            },include: {
                association: 'comment'
            },
            attributes: [
                'id',
            ]
        });
        
        await CommentsModel.destroy({
            where: { 
                id: id, article_id: article.id
            }
        });

    }

}