export const users = (req, res) =>
    res.render("users", { pageTitle: "Users" });

export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePW = (req, res) =>
    res.render("changePassword", { pageTitle: "Password Change" });