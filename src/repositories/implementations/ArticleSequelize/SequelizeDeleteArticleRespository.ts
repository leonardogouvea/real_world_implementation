import { IDeleteArticleRepository } from "../../Article/DeleteArticleRepository";
const  ArticleModel = require('../../../database/models/article.model'); 

export class SequelizeDeleteArticleRepository implements IDeleteArticleRepository {

    async findBySlug(slug:string): Promise<boolean> {
        return await ArticleModel.findOne({  where: { slug }});
    }

    async delete(slug:string): Promise<void>{

        await ArticleModel.destroy({
            where: { 
                slug: slug
            }
        });
    }
    
}

