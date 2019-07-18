import routes from "./routes";

import multer from "multer";
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MYTUBE";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
    name: "test user"
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); //upload only one file
