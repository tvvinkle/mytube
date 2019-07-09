import express from "express";
import routes from "../routes";
import {
  videos,
  videoDetail,
  videoEdit,
  videoDelete,
  upload,
  postUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, upload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;
