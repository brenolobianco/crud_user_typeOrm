import {
    Request,
    Response,
    NextFunction
  } from 'express';

  import { AppError } from '../error';
  
  const ensureDataUpdate = async (req:Request, res:Response, next:NextFunction) => {
    
   const user=req.body

    if ('isAdm' in user || 'isActive' in user|| 'id' in user){
        throw new AppError('No be able to update:IsAdm,IsActive, Id', 401)
    }
    return next()
  }
  
  export default ensureDataUpdate