import passport from "passport";

import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";
// import { videos } from "../db";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res, next) => {
  console.log("PostJOIN");
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(`post join error: ${error}`);
      res.redirect(routes.home);
    }
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallBack = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  // console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    console.log(`githubuser ${user}`);
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (e) {
    console.log(`github login error : ${e}`);
    return cb(e);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallBack = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log(`facebookuser ${user}`);
      user.facebookId = id;
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
    });
    return cb(null, newUser);
  } catch (e) {
    console.log(`github login error : ${e}`);
    return cb(e);
  }
};

export const postFacebookLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const search = async (req, res) => {
  // console.log("req:", req.query);
  const {
    query: { keyword: searchingBy }
  } = req; // const searchingBy = req.query.keyword;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" } // i -> insensetive
    });
  } catch (e) {
    console.log(e);
    res.redirect(routes.home);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
