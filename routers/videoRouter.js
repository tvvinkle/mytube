import express from "express";
import routes from "../routes";
import {
    videos,
    vedioDetail,
    videoEdit,
    videoDelete,
    upload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.vedioDetail, vedioDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;