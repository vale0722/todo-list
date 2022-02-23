import tasks from "./modules/tasks";
import { createStore } from "vuex";

export const store = createStore({
  modules: {
    tasks,
  },
});