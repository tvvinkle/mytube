import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import {
  githubLoginCallBack,
  facebookLoginCallBack
} from "./controllers/globalController";
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

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallBack}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"]
    },
    facebookLoginCallBack
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
