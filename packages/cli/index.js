#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { createTask, listTasks, deleteTask } = require('@gemini-snake/core');

const cli = yargs(hideBin(process.argv))
  .command('task-create <task>', 'Create a new task', (yargs) => {
    return yargs
      .positional('task', {
        describe: 'The task to create',
        type: 'string',
      });
  }, (argv) => {
    const task = createTask(argv.task);
    console.log(`Task created: ${task}`);
  })
  .command('task-list', 'List all tasks', () => {}, (argv) => {
    const tasks = listTasks();
    console.log('Tasks:', tasks);
  })
  .command('task-delete <task>', 'Delete a task', (yargs) => {
    return yargs
      .positional('task', {
        describe: 'The task to delete',
        type: 'string',
      });
  }, (argv) => {
    const task = deleteTask(argv.task);
    console.log(`Task deleted: ${task}`);
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .help()

if (require.main === module) {
  cli.argv;
}

module.exports = cli;
