export const home = (req, res) =>
    res.render("home", { pageTitle: "Home" });

export const join = (req, res) =>
    res.render("join", { pageTitle: "Join" });

export const login = (req, res) =>
    res.render("login", { pageTitle: "Login" });

export const logout = (req, res) =>
    res.render("logout", { pageTitle: "Logout" });

export const search = (req, res) => {
    // console.log("req:", req.query);
    const { query: { keyword: searchingBy } } = req //const searchingBy = req.query.keyword;
    res.render("search", { pageTitle: "Search", searchingBy });
}