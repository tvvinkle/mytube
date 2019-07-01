import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
    name: "test user"
  };
  res.locals.video = {
    id: 1,
    title: "test video"
  };
  // console.log(res.locals);
  next();
};
