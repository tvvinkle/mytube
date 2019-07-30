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
    const user = await User.findById(id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (e) {
    console.log(`user Detail eror ${e}`);
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl
    });
    res.redirect(routes.mypage);
  } catch (error) {
    console.log(`postEidtProfile error: ${e}`);
    res.redirect(routes.editProfile);
  }
};

export const changePW = (req, res) =>
  res.render("changePassword", { pageTitle: "Password Change" });

export const postChangePW = async (req, res) => {
  const {
    body: { oldPassword, newPassword1, newPassword2 }
  } = req;
  try {
    if (newPassword1 !== newPassword2) {
      res.redirect(`/users/${routes.changePW}`);
    } else {
      await req.user.changePassword(oldPassword, newPassword1);
      res.redirect(routes.mypage);
    }
  } catch (e) {
    console.log(`changePassword error: ${e}`);
    res.redirect(`/users/${routes.changePW}`);
  }
};
