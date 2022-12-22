import {
    Request,
    Response,
    NextFunction
} from 'express';

export class AppError extends Error {
    statusCode: number
    constructor(message: string, statusCode:number = 400){
        super()
        this.statusCode= statusCode
        this.message = message
    }
}
export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError){
       
        return res.status(err.statusCode).json({message: err.message})   
    }
   
    return res.status(500).json({message: "Internal server error"})
}