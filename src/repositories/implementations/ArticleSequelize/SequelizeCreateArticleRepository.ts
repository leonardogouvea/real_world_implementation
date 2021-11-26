import { ICreateArticleRepository } from "../../Article/CreateArticleRepository";
import  { Article }  from "../../../entities/Article";
const  UserModel = require('../../../models/user.model'); 
const  ArticleModel = require('../../../models/article.model'); 

export class SequelizeCreateArticleRepository implements ICreateArticleRepository {

    async findBySlug(slug:string): Promise<Article>{
        return await ArticleModel.findOne({  where: { slug }});
    }

    async save(article: Article): Promise<object>{

        const {newSlug, title, description, body, tagList} = article;

        const user = await UserModel.findOne({  
            where: { 
                id: article.userId
            },
            include: { association: 'articles'}     
        });
        
        const newArticle =  await ArticleModel.create({
            slug:newSlug,
            user_id:article.userId,
            title: title,
            description: description,
            body: body,
            tagList:`${JSON.stringify({tagList})}`,
            include: { association: 'articles'} 
        });

        const articleModel = await ArticleModel.findOne({  
            where: { 
                id: newArticle.id
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

