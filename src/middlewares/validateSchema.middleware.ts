import {
    Request,
    Response,
    NextFunction
} from 'express';

const validateSchemaMiddleware = (serializer) => async (req:Request, res: Response, next: NextFunction) =>{

    try{
        const validatedData = await serializer.validate(req.body,{
            stripUnknown: true,
            abortEarly: false
        })
        req.body = validatedData
        return next()
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

export default validateSchemaMiddleware