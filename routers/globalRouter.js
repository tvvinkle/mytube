import express from "express";
import routes from "../routes";
import {
  home,
  join,
  postJoin,
  login,
  postLogin,
  logout,
  search
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
