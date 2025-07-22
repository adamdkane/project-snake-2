let tasks = [];

const createTask = (task) => {
  tasks.push(task);
  return task;
};

const listTasks = () => {
  return tasks;
};

const deleteTask = (taskName) => {
  const index = tasks.findIndex(task => task.name === taskName);
  if (index > -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  createTask,
  listTasks,
  deleteTask,
  tasks,
};
