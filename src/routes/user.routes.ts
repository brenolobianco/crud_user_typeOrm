import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";
import verifyUserExistMiddleware from "../middlewares/verifyUserExists.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyUserAdmMiddleware from "../middlewares/verifyUserAdm.middleware";
import ensureDataUpdate from "../middlewares/ensureDataUptade.middleware";

const UserRouter = Router();
UserRouter.post("", verifyUserExistMiddleware, createUserController);
UserRouter.get(
  "",
  ensureAuthMiddleware,
  verifyUserAdmMiddleware,
  listUsersController
);
UserRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataUpdate,
  updateUserController
);
UserRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyUserAdmMiddleware,
  deleteUserController
);

export default UserRouter;
