import { IUpdateArticleRepository } from "../../repositories/Article/UpdateArticleRepository";
import { IUpdateArticleDTO } from "./UpdateArticleDTO";
const slug = require('slug');

export class UpdateArticleUseCase {
    constructor(
        private updateArticleRepository: IUpdateArticleRepository
    ){}
    
    async execute(data: IUpdateArticleDTO) {

        const findBySlug = await this.updateArticleRepository.findBySlug(data.slug)
        
        if(findBySlug === false){
            throw new Error(`Slug ${data.slug} don't not exist`);
        }
        
        return await this.updateArticleRepository.update(data);
    }
}