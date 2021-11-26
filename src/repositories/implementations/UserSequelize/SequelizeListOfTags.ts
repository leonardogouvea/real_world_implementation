import { IListOfTagsRepository } from "../../User/IListOfTagsRepository";
const  ArticleModel = require('../../../models/article.model'); 

export class ListOfTagsRepository implements IListOfTagsRepository{

    async findByTags( userId:string):Promise< object >{
        const article = await ArticleModel.findOne({  
            attributes: [
                'tagList' as 'tags',
            ]
        });
        article.dataValues.tagList = JSON.parse(article.dataValues.tagList);
        return article.tagList;
    }
}