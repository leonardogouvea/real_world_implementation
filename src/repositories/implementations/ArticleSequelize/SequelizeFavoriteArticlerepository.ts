import { IFavoriteArticleRepository } from "../../Article/FavoriteArticleRepository";
const  ArticleModel = require('../../../database/models/article.model');
const  FavoriteArticleModel = require('../../../database/models/favoriteArticle.model');

export class SequelizeFavoriteArticlesRepository implements IFavoriteArticleRepository {
    
    async save(slug:string, userId: string): Promise< object>{


        var article = await ArticleModel.findOne({
            where: {
                slug: slug
            },include: { 
                association: 'author',
                attributes: [
                    'username',
                    'bio',
                    'image',
                ]  
            },attributes: [
                'id',
                'slug',
                'title',
                'description',
                'body',
                'tagList',
                'createdAt',
                'updatedAt',
            ]    
        });
        
        await FavoriteArticleModel.findOrCreate({
            where: {  user_id: userId, article_id:article.id }
        }); 
        article.dataValues.tagList = JSON.parse(article.dataValues.tagList);
        delete article.dataValues.id;
        return { article }
    }
}