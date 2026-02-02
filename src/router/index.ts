import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/sobre-mi",
      name: "sobre.mi",
      component: () => import("../views/SobreMiView.vue"),
    },
  ],
});

export default router;
