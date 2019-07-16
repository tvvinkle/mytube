import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePW
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.changePW, changePW);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;