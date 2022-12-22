import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import {
  IUserResponse,
  IUserUpdate
 
} from "../../interfaces/user.interface";
import { returnUserWithoutPassword } from "../../serializers/user.serializer";

const updateUserService = async (userData: IUserUpdate,userId: string): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  if(!findUser){
    throw new AppError('User Not Exists ', 404)
}
  const updatedUser = userRepository.create({
    ...findUser,
    ...userData
  
  });

  await userRepository.save(updatedUser);

return updatedUser

};

export default updateUserService 
