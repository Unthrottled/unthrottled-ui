import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { Position, Route } from "vue-router/types/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue")
  },
  {
    path: "/capabilities",
    name: "Capabilities",
    component: () => import("../views/Capabilities.vue")
  },
  {
    path: "/values",
    name: "Values",
    component: () => import("../views/Values.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/**",
    name: "Default",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to: Route, from: Route, savedPosition: Position | void) {
    return new Promise(res => {
      setTimeout(() => {
        if (savedPosition) {
          res(savedPosition);
        } else {
          res({ x: 0, y: 0 });
        }
      }, 300);
    });
  }
});

export default router;
