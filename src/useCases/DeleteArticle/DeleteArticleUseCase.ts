import { IDeleteArticleRepository } from "../../repositories/Article/DeleteArticleRepository";
import { IDeleteArticleRequestDTO } from "./DeleteArticleDTO";

export class DeleteArticleUseCase {
    constructor(
        private deleteArticleRepository: IDeleteArticleRepository
    ){}

    async execute(data: IDeleteArticleRequestDTO) {
        const slugAlreadyExists = await this.deleteArticleRepository.findBySlug(data.slug);

        if(slugAlreadyExists === false){
            throw new Error(`Article ${data.slug} don't not exist`);
        }

        return await this.deleteArticleRepository.delete(data.slug);
        
    }
}