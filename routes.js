import { METHODS } from "http";

// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// user
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PW = "/change-password";
const USER_DETAIL = "/:id";
const MYPAGE = "/myPage";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

// auth
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  mypage: MYPAGE,
  editProfile: EDIT_PROFILE,
  changePW: CHANGE_PW,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  videoEdit: id => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  videoDelete: id => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return VIDEO_DELETE;
  },
  github: GITHUB,
  githubCallBack: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallBack: FACEBOOK_CALLBACK
};

export default routes;
