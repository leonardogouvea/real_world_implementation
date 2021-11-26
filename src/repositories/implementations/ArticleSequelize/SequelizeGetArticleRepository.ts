import { IGetArticleRepository } from "../../Article/GetArticleRepository";
const  ArticleModel = require('../../../models/article.model'); 

export class SequelizeGetArticlesRepository implements IGetArticleRepository {
    
    async findArticleBySlug(slug:string): Promise< object | false>{
          
        const articleModel = await ArticleModel.findOne({  
            where: { 
                slug
            },
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

        const taglist = JSON.parse(articleModel.tagList);
        const articleDetails = {
            article: {
                slug: articleModel.slug,
                title: articleModel.title,
                description: articleModel.description,
                body: articleModel.body,
                tagList : taglist['tagList'],
                createdAt: articleModel.createdAt,
                updatedAt: articleModel.updatedAt,
                favorited: false,
                favoritesCount: 0,
                author: {
                    username: articleModel.author.username,
                    bio: articleModel.author.bio,
                    image: articleModel.author.image,
                    following: false
                }
            }
        }
        
        return articleDetails
    }
}