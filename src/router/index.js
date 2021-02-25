import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound from "../views/NotFound.vue";
import Posts from "../views/posts/Posts.vue";
import PostDetail from "../views/posts/PostDetail.vue";

const routes = [
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/job/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
