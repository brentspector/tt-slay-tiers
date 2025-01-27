import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import("../views/Welcome.vue")
  },
  {
    path: "/tierlists",
    component: () => import("../views/Tierlist.vue"),
  },
  {
    path: "/blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import("../views/Article.vue"),
    props: true
  },
  {
    path: "/cards",
    component: () => import("../views/Details.vue"),
  },
  {
    path: '/cards/:id',
    component: () => import ('../views/Details.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
