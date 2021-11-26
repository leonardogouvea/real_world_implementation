import { Comment } from "../../entities/Comment";

export interface IAddCommentsArticleRepository{
    save(comment: Comment): Promise<object>;
}