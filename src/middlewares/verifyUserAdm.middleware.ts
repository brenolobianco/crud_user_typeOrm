import {
  Request,
  Response,
  NextFunction
} from 'express';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';
import { AppError } from '../error';

const verifyUserAdmMiddleware = async (req:Request, res:Response, next:NextFunction) => {
  

  if (!req.user.isAdm){
      throw new AppError('User is not Adm', 403)
  }
  return next()
}

export default verifyUserAdmMiddleware