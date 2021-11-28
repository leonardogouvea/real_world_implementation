import { IFeedArticleRepository } from "../../Article/FeedArticleRepository";
const  ArticleModel = require('../../../database/models/article.model'); 

export class SequelizeFeedArticlesRepository implements IFeedArticleRepository {
    
    async findArticles(limit:string, offset:string): Promise< object | false>{
        const articleModel = await ArticleModel.findAll({  
            limit: limit,
            offset: offset,
            include: { 
                association: 'author', 
                attributes: [
                    'username',
                    'bio',
                    'image',
                ]     
            },
            attributes: [
                'slug',
                'title',
                'description',
                'body',
                'tagList',
                'createdAt',
                'updatedAt',
            ]     
        });
        return {article: articleModel}
    }
}