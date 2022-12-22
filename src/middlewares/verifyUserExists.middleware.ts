import {
    Request,
    Response,
    NextFunction
} from 'express';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';
import { AppError } from '../error';

const verifyUserExistMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const UserRepository = AppDataSource.getRepository(User)
    const user = await UserRepository.findBy({name:req.body.name})
   
    if (user.length > 0){
        throw new AppError('User as already exists', 400)
    }
    return next()
}

export default verifyUserExistMiddleware