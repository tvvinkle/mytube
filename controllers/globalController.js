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
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const logout = (req, res) =>
  // logout process
  res.redirect(routes.home);

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
