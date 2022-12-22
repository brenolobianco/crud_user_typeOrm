import { IUserRequest, IUserResponse } from '../../interfaces/user.interface'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { returnUserWithoutPassword } from '../../serializers/user.serializer'

const createUserService = async(userData: IUserRequest): Promise<IUserResponse> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const createdUser = userRepository.create(userData)
    await userRepository.save(createdUser)
    
    const userWithoutPassword = await returnUserWithoutPassword.validate(createdUser, {
        stripUnknown: true,
        abortEarly:false
    })
  
    return userWithoutPassword
    
}

export default createUserService 