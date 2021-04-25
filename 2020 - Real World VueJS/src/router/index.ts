import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true,
  },
  {
    path: "*",
    component: NotFoundComponent, // implement a catch-all route for 404 errors
  },
];

const router = new VueRouter({
  mode: "history", // uses the browser' history.pushstate API to change URL without reloading the page
  base: process.env.BASE_URL,
  routes,
});

export default router;
