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

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);

//Upload video
videoRouter.get(routes.upload, upload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit video
videoRouter.get(routes.videoEdit(), videoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

//Delete video
videoRouter.get(routes.videoDelete(), videoDelete);
videoRouter.post(routes.videoDelete(), postVideoDelete);

export default videoRouter;
