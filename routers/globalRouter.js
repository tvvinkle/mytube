import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  home,
  join,
  postJoin,
  login,
  postLogin,
  logout,
  search,
  githubLogin,
  postGithubLogIn,
  facebookLogin,
  postFacebookLogIn
} from "../controllers/globalController";
import { myPage } from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, join);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, login);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.mypage, myPage);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallBack,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallBack,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogIn
);

export default globalRouter;
