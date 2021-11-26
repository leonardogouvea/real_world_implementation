import { IAddCommentsArticleRepository } from "../../repositories/Comment/IAddCommentsArticleRepository";
import { IAddCommentsArticleDTO } from "./AddCommentsArticleDTO";
import { Comment } from "../../entities/Comment";

export class AddCommentsArticleUseCase {
    constructor(
        private addCommentsArticleRepository: IAddCommentsArticleRepository
    ){}

    async execute(data: IAddCommentsArticleDTO) {
        
        const comment = new Comment(data);
        return await this.addCommentsArticleRepository.save(comment);
    }
}