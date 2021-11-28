import { IListArticleRepository } from "../../Article/ListArticlesRepository";
const  ArticleModel = require('../../../database/models/article.model'); 

export class SequelizeListArticlesRepository implements IListArticleRepository {
    
    async findByListArticles(where): Promise< object>{
         
        const articleModel = await ArticleModel.findAll({  
            limit: where.where.limit,
            offset: where.where.offset,
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
            ],
        });

        for( let i = 0; i < articleModel.length; i++ ){
            articleModel[i].tagList = JSON.parse(articleModel[i].tagList);
        }
        
        return articleModel
    }
}
