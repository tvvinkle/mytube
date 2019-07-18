import express from "express";
import routes from "../routes";
import {
  videoDetail,
  videoEdit,
  postVideoEdit,
  videoDelete,
  postVideoDelete,
  upload,
  postUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import { onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);

// Upload video
videoRouter.get(routes.upload, onlyPrivate, upload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit video
videoRouter.get(routes.videoEdit(), onlyPrivate, videoEdit);
videoRouter.post(routes.videoEdit(), onlyPrivate, postVideoEdit);

// Delete video
videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete);
videoRouter.post(routes.videoDelete(), onlyPrivate, postVideoDelete);

export default videoRouter;
