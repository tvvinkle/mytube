import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const theVideo = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", theVideo });
  } catch (e) {
    res.redirect(routes.home);
  }
};

export const videoEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const theVideo = await Video.findById(id);
    res.render("videoEdit", { pageTitle: `Edit ${theVideo.title}`, theVideo });
  } catch (e) {
    s.redirect(routes.home);
  }
};

export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (e) {
    res.redirect(routes.home);
  }
};

export const videoDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const theVideo = await Video.findById(id);
    res.render("videoDelete", { pageTitle: `Delete ${theVideo.title}`, theVideo });
  } catch (e) {
    console.log(e);
    res.redirect(routes.home);
  }
};

export const postVideoDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const theVideo = await Video.findOneAndRemove({_id:id});
    res.redirect(routes.home);
  } catch (e) {
    console.log(e);
    res.redirect(routes.home);
  }
};

export const upload = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  try {
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
    });
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (e) {
    console.log(e);
  }
};
