import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePW
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.changePW, onlyPrivate, changePW);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
