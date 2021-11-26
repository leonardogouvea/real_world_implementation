import { IGetCommentsArticleRepository } from "../../repositories/Comment/IGetCommentsArticleRepository";
import { IGetCommentsArticleDTO } from "./GetCommentsArticleDTO";

export class GetCommentsArticleUseCase {
    constructor(
        private getCommentsArticleRepository: IGetCommentsArticleRepository
    ){}

    async execute(data: IGetCommentsArticleDTO){
       const commets = await this.getCommentsArticleRepository.findCommentsBySlug(data.slug);

       if ( !commets ){
            throw new Error(`Article does not exists`);
       }
       return commets;
    }
}