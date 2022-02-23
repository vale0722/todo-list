import { MutationsTypes } from "@/definitions/definitions";
import { getTasks, setTasks } from "@/helpers/localstorage";

const tasks = {
  state: {
    tasks: [],
    status: false,
  },
  mutations: {
    [MutationsTypes.SET_ALL](state) {
      state.tasks = getTasks();
    },

    [MutationsTypes.ADD_NEW_TASK](state, task) {
      state.tasks.push(task);
      state.status = true;
      setTasks(state.tasks);
    },
    [MutationsTypes.DELETE_TASK](state, taskId) {
      state.tasks.splice(state.tasks.map((e) => e.id).indexOf(taskId), 1);
      setTasks(state.tasks);
    },
    [MutationsTypes.UPDATE_TASK](state, task) {
      const index = state.tasks.map((e) => e.id).indexOf(task.id);

      state.tasks[index].todo !== task.todo
        ? (state.tasks[index].todo = task.todo)
        : (state.tasks[index].status = task.status);

      state.status = false;
      setTasks(state.tasks);
    },
    [MutationsTypes.CLEAR_ALL]: (state) => {
      state.tasks.splice(0, state.tasks.length);
      setTasks(state.tasks);
    },
  },
  getters: {
    getAllTasks: (state) => state.tasks,
    solvedTasks: (state) => state.tasks.filter((task) => task.status),
    unsolvedTasks: (state) => state.tasks.filter((task) => !task.status),
    getStatus: (state) => state.status,
  },
};

export default tasks;
