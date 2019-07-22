import passport from "passport";
import GithubStrategy from "passport-github";
import { githubLoginCallBack } from "./controllers/globalController";
import routes from "./routes";

import User from "./models/User";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallBack}`
    },
    githubLoginCallBack
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
