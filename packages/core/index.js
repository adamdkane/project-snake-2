const { tasks } = require('./store');

function createTask(task) {
  tasks.push(task);
  return task;
}

function listTasks() {
  return tasks;
}

function deleteTask(taskName) {
  const index = tasks.findIndex(task => task === taskName);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  return taskName;
}

module.exports = {
  createTask,
  listTasks,
  deleteTask,
  tasks,
};