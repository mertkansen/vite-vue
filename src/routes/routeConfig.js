import Home from "./views/Home.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";
import Image from "./views/Image.vue";
import TaskTracker from "./views/TaskTracker.vue";

const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  TASK_TRACKER: "/task-tracker",
  IMAGE: "/image",
  USER: "/user",
};

const routeConfig = [
  { path: PATHS.HOME, component: Home, name: "Home" },
  { path: PATHS.ABOUT, component: About, name: "About" },
  { path: PATHS.TASK_TRACKER, component: TaskTracker, name: "Tasks" },
  { path: PATHS.IMAGE, component: Image, name: "Image" },
  { path: `${PATHS.USER}/:id`, component: User, name: "User" },
];

export { routeConfig, PATHS };
