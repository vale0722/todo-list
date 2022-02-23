export const setTasks = (Tasks) => {
  localStorage.setItem("tasks", JSON.stringify(Tasks));
};

export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};
