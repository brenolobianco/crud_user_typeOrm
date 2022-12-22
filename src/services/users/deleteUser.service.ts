import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../error'

const deleteUserService = async (user_id:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id:user_id})
    
    if(!user){
        throw new AppError('User Not Exists ', 404)
    }

    
    if (user.isActive===false){
        throw new AppError('User is not active', 400)
    }

    user.isActive = false
    await userRepository.save(user)

    return {}
}

export default deleteUserService