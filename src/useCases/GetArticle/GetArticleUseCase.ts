import { IGetArticleRepository } from "../../repositories/Article/GetArticleRepository";
import { IGetArticleRequestDTO } from "./GetArticleDTO";

export class GetArticleUseCase {
    constructor(
        private getArticleRepository: IGetArticleRepository
    ){}

    async execute(data: IGetArticleRequestDTO) {
        const slugAlreadyExists = await this.getArticleRepository.findArticleBySlug(data.slug);

        if(slugAlreadyExists === false){
            throw new Error(`Article ${data.slug} don't not exist`);
        }

        return slugAlreadyExists;
        
    }
}