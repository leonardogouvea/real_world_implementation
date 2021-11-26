import { IUpdateArticleRepository } from "../../Article/UpdateArticleRepository";
const  ArticleModel = require('../../../models/article.model'); 
const slug = require('slug');

export class SequelizeUpdateArticlesRepository implements IUpdateArticleRepository {
    
    async findBySlug(slug:string): Promise<boolean>{
        const article = await ArticleModel.findOne({  
            where: { 
                slug: slug 
            }
        });
        if(article){
            return true;
        }
        return false;
    }
   
    async update(params): Promise<object>{
          
        for (const [key, value] of Object.entries(params)) {

            if (value !== undefined && key != 'id') {

                switch (key) {
                    case 'description': 
                        await ArticleModel.update({ 
                            email: `${params.email}`, 
                        }, { where: { slug: params.slug }});
                    break;
                    case 'body': 
                        await ArticleModel.update({ 
                            password: `${params.password}`, 
                        }, { where: { slug: params.slug }});
                    break;
                }
            }
        }

        if( params.title != undefined){
            const newSlug = slug(params.title);
            await ArticleModel.update({ 
                title: `${params.title}`, slug: `${newSlug}`
            }, { where: { slug: params.slug }});
            params.slug = newSlug;
        }
       
        const articleModel = await ArticleModel.findOne({  
            where: { 
                slug: params.slug 
            },
            include: { association: 'author'},
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