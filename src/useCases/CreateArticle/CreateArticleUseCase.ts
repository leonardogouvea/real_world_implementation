import { ICreateArticleRepository } from "../../repositories/Article/CreateArticleRepository";
import { ICreateArticleRequestDTO } from "./CreateArticleDTO";
import { Article } from "../../entities/Article";
const slug = require('slug')

export class CreateArticleUseCase {
    constructor(
        private createArticleRepository: ICreateArticleRepository
    ){}

    async execute(data: ICreateArticleRequestDTO) {
        const slugAlreadyExists = await this.createArticleRepository.findBySlug(data.newSlug);

        if(slugAlreadyExists) {
            data.newSlug = slug(data.newSlug + "-"+ new Date().getTime());
        }

        const user = new Article(data);
        return await this.createArticleRepository.save(user);
        
    }
}