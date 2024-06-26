import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../pages/Home.vue"),
    },
    {
      path: "/shop/:img/:name/:price",
      name: "shop",
      component: import("../pages/shop.vue"),
    },
    
  ],
});

export default router;
