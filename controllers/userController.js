import User from "../models/User";
import routes from "../routes";

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const myPage = async (req, res) => {
  //   console.log(`mypage user: ${req.user}`);
  try {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
  } catch (e) {
    console.log(`mypage error: ${e}`);
    res.redirect(routes.home);
  }
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (e) {
    console.log(e);
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePW = (req, res) =>
  res.render("changePassword", { pageTitle: "Password Change" });
