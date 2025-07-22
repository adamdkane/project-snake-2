#!/usr/bin/env node
import { Command } from 'commander';
import { createTask, listTasks, deleteTask } from '../core';

const program = new Command();

program
    .name('gemini-snake')
    .description('A CLI for managing tasks in Project Snake 2')
    .version('0.0.1');

program.command('task')
    .command('create')
    .description('Create a new task')
    .argument('<title>', 'The title of the task')
    .action(async (title) => {
        const task = await createTask(title);
        console.log(`Task created with ID: ${task.id}`);
    });

program.command('task')
    .command('list')
    .description('List all tasks')
    .action(async () => {
        const tasks = await listTasks();
        console.table(tasks);
    });

program.command('task')
    .command('delete')
    .description('Delete a task')
    .argument('<id>', 'The ID of the task to delete')
    .action(async (id) => {
        await deleteTask(parseInt(id, 10));
        console.log(`Task with ID ${id} has been deleted.`);
    });

program.parse();
