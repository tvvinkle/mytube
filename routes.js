//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//user
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PW = "/change-password";
const USER_DETAIL = "/:id";

//video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VEDIO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePW: CHANGE_PW,
    videos: VIDEOS,
    vedioDetail: VEDIO_DETAIL,
    upload: UPLOAD,
    videoEdit: VIDEO_EDIT,
    videoDelete: VIDEO_DELETE
};

export default routes;