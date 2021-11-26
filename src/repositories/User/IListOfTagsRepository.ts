export interface IListOfTagsRepository{
    findByTags( userId:string): Promise<object>;
}