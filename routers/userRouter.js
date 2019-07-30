import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  postEditProfile,
  changePW,
  postChangePW,
  myPage
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);

userRouter.get(routes.changePW, onlyPrivate, changePW);
userRouter.post(routes.changePW, onlyPrivate, postChangePW);

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
