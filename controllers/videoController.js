import routes from "../routes";
// import { videos } from "../db";

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const videoEdit = (req, res) =>
  res.render("videoEdit", { pageTitle: "Edit Video" });

export const videoDelete = (req, res) =>
  res.render("videoDelete", { pageTitle: "Delete Video" });

export const upload = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });

export const postUpload = async (req, res) => {

  const {
    body: { title, description },
    file: { path }
  } = req;
  console.log(`path: ${path}`);

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });

  console.log("saved", newVideo);
  res.redirect(routes.home);
  // res.redirect(routes.videoDetail(newVideo.id));
};
