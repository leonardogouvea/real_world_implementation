import { UpdateUserUseCase} from './UpateUserUseCase';
import { UpdateUserController} from './UpdateUserController';
import { SequelizeUpdateUserRepository} from '../../repositories/implementations/UserSequelize/SequelizeUpdateUserRepository';

const sequelizeUpdateUserRepository = new SequelizeUpdateUserRepository();

const updateUserUseCase =  new UpdateUserUseCase(
    sequelizeUpdateUserRepository
);

const updateUserController = new UpdateUserController(
    updateUserUseCase
);

export { updateUserUseCase, updateUserController  }