import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
  },
  {
    path: "/blogs?page=:page",
    name: "blogs-page",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
    props: true,
  },
  {
    path: "/blogs?sort_by=:sortBy",
    name: "blogs-sort-by",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
    props: true,
  },
  {
    path: "/blogs?sort_direction=:sortDirection",
    name: "blogs-sort-direction",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
    props: true,
  },
  {
    path: "/blogs?search=:search",
    name: "blogs-search",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
    props: true,
  },
  {
    path: "/blogs/:blogId",
    name: "blog",
    component: () =>
      import(
        /* webpackChunkName: "BlogDetailPage" */ "../views/BlogDetailPage.vue"
      ),
    props: true,
  },
  {
    path: "/blogs/create",
    name: "blogs-create",
    component: () =>
      import(
        /* webpackChunkName: "BlogDetailPage" */ "../views/BlogCreatePage.vue"
      ),
  },
  {
    path: "/blogs/edit/:blogId",
    name: "blog-edit",
    component: () =>
      import(
        /* webpackChunkName: "BlogDetailPage" */ "../views/BlogEditPage.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
