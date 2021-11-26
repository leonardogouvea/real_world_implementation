import { IDeleteCommentArticleRepository } from "../../repositories/Comment/IDeleteCommentArticleRepository";
import { IDeleteCommentArticleDTO } from "./DeleteCommentArticleDTO";

export class DeleteCommentArticleUseCase {
    constructor(
        private deleteCommentArticleRepository: IDeleteCommentArticleRepository
    ){}

    async execute(data: IDeleteCommentArticleDTO) {
        return await this.deleteCommentArticleRepository.delete(data.slug, data.id);;
    }
}