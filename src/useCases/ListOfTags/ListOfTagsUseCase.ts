import { IListOfTagsRepository } from "../../repositories/User/IListOfTagsRepository";
import { IListOfTagsDTO } from "./ListOfTagsDTO";

export class ListOfTagsUseCase {

    constructor(
        private unfavoriteArticleRepository: IListOfTagsRepository
    ){}

    async execute(data: IListOfTagsDTO){
       return await this.unfavoriteArticleRepository.findByTags(data.userId);
    }
}