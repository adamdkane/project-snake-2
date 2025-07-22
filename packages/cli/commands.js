const { createTask, listTasks, deleteTask } = require('@gemini-snake/core');

function createTaskCommand(argv) {
  const task = { name: argv.name };
  createTask(task);
  console.log(`Task "${argv.name}" created.`);
}

function listTasksCommand() {
  const tasks = listTasks();
  console.log('Tasks:');
  tasks.forEach(task => {
    console.log(`- ${task.name}`);
  });
}

function deleteTaskCommand(argv) {
  if (deleteTask(argv.name)) {
    console.log(`Task "${argv.name}" deleted.`);
  } else {
    console.log(`Task "${argv.name}" not found.`);
  }
}

module.exports = {
  createTaskCommand,
  listTasksCommand,
  deleteTaskCommand,
};
