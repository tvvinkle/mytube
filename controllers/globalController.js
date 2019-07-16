import routes from "../routes";
import Video from "../models/Video";
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

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    // req.flash("error", "Passwords don't match");
    console.log("password no match");
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else if (name == "" || email == "" || password == "") {
    // req.flash("error", "Please fill up the form");
    console.log("empty field");
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // Regeister user & user log in
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = (req, res) => {
  // check the user info with db
  res.redirect(routes.home);
};

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
