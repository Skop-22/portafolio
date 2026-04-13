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
    {
      path: "/certificados",
      name: "certificados",
      component: () => import("../views/CertificadosView.vue"),
    },
    {
      path: "/experiencia/profesional",
      name: "experiencia.profesional",
      component: () => import("../views/ExperienciaProfesional.vue"),
    },
    {
      path: "/proyectos",
      name: "proyectos",
      component: () => import("../views/ProyectosView.vue"),
    },
    {
      path: "/proyectos/ecommerce",
      name: "proyectos.ecommerce",
      component: () => import("../views/ProyectoEcommerceView.vue"),
    },
    {
      path: "/proyectos/restaurante",
      name: "proyectos.restaurante",
      component: () => import("../views/ProyectoRestauranteView.vue"),
    },
    {
      path: "/proyectos/saas",
      name: "proyectos.saas",
      component: () => import("../views/ProyectoSaasView.vue"),
    },
    {
      path: "/proyectos/lenguaje",
      name: "proyectos.lenguaje",
      component: () => import("../views/ProyectoLenguajeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
