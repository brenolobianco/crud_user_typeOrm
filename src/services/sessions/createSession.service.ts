import { ISessionRequest } from '../../interfaces/session.interface'
import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import 'dotenv/config'
import { AppError } from '../../error'

const createSessionService = async ( { email, password }: ISessionRequest ): Promise<Array<number | string>> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })
    
    if(!user){
         throw new AppError('User or password invalid',403)
    }
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError('User or password invalid',403)
    }

    const token = jwt.sign(
    {isAdm:user.isAdm},process.env.SECRET_KEY,
        {
            subject: String(user.id), 
            expiresIn: '24h'
        }
    )

    return [200, token]
}
export default createSessionService