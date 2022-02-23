import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MeView from "../views/MeView.vue";
import IntroductionView from "../views/IntroductionView.vue";
import BasicsView from "../views/BasicsView.vue";
import NewAppView from "../views/NewAppView.vue";
import TodoListView from "../views/TodoListView.vue";
import AllView from "../views/todo-lists/AllView.vue";
import Solved from "../views/todo-lists/SolvedView.vue";
import Unsolved from "../views/todo-lists/UnsolvedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: HomeView,
    },
    {
      path: "/me",
      name: "Sobre Mi",
      component: MeView,
    },
    {
      path: "/introduction",
      name: "Introducción",
      component: IntroductionView,
    },
    {
      path: "/basics",
      name: "Conceptos Basicos",
      component: BasicsView,
    },
    {
      path: "/new-app",
      name: "Crear una App desde Cero",
      component: NewAppView,
    },
    {
      path: "/todo-list",
      name: "Lista de Tareas",
      component: TodoListView,
      children: [
        {
          path: "",
          name: "todas Lista de Tareas",
          components: {
            todo: AllView,
          },
        },
        {
          path: "solved",
          name: "Lista de Tareas Resueltas",
          components: {
            todo: Solved,
          },
        },
        {
          path: "unsolved",
          name: "Lista de Tareas No Resueltas",
          components: {
            todo: Unsolved,
          },
        },
      ],
    },
  ],
});

export default router;
