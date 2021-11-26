import { ListOfTagsUseCase } from "./ListOfTagsUseCase";
import { ListOfTagsController } from "./ListOfTagsController";
import { ListOfTagsRepository } from "../../repositories/implementations/UserSequelize/SequelizeListOfTags";

const listOfTagsRepository = new ListOfTagsRepository();

const listOfTagsUseCase = new ListOfTagsUseCase(
    listOfTagsRepository
);

const listOfTagsController = new ListOfTagsController(
    listOfTagsUseCase
);

export { listOfTagsUseCase, listOfTagsController }