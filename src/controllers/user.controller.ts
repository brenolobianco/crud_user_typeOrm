import { Request, Response } from "express";

import { IUserRequest, IUserUpdate } from "../interfaces/user.interface";
import listUsersService from "../services/users/listUser.service";
import createUserService from "../services/users/createUser.service";
import updateUserService  from "../services/users/uptadeUser.service";
import  deleteUserService  from "../services/users/deleteUser.service"

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body
  const newUser = await createUserService(userData)
  return res.status(201).json(newUser)
}
  
  const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();
    return res.status(200).json(users);
  };

  const updateUserController = async (req:Request, res: Response) => {
    const userData: IUserUpdate = req.body
    const userId = req.params.id
    const updatedUser = await updateUserService(userData, userId)
    return res.status(200).json(updatedUser)
}
export const deleteUserController = async (req:Request, res: Response) => {
  await deleteUserService(req.params.id)
  return res.status(204).send()
}

  export { createUserController,listUsersController,updateUserController,deleteUserService }