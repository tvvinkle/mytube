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
  postGithubLogIn
} from "../controllers/globalController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, join);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, login);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallBack,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogIn
);

export default globalRouter;
