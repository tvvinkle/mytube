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

export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  // upload and save video file with info - generate id and creator
  console.log(req.body);
  res.redirect(routes.videoDetail(1)); //temp
};
