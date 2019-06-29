export const videos = (req, res) =>
    res.render("videos", { pageTitle: "Videos" });

export const vedioDetail = (req, res) =>
    res.render("vedioDetail", { pageTitle: "Video Detail" });

export const videoEdit = (req, res) =>
    res.render("videoEdit", { pageTitle: "Edit Video" });

export const videoDelete = (req, res) =>
    res.render("delete", { pageTitle: "Delete Video" });

export const upload = (req, res) =>
    res.render("upload", { pageTitle: "Upload Video" });