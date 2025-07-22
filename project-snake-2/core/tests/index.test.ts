import { createTask, listTasks, deleteTask } from '../src';

describe('Task Management', () => {
  beforeEach(() => {
    // Clear tasks before each test to ensure isolation
    const tasks = listTasks();
    tasks.forEach(task => deleteTask(task.id));
  });

  test('should create a new task', () => {
    const task = createTask('Buy groceries');
    expect(task).toBeDefined();
    expect(task.title).toBe('Buy groceries');
    expect(task.completed).toBe(false);
    expect(listTasks()).toHaveLength(1);
  });

  test('should list all tasks', () => {
    createTask('Read a book');
    createTask('Go for a run');
    const tasks = listTasks();
    expect(tasks).toHaveLength(2);
    expect(tasks[0].title).toBe('Read a book');
    expect(tasks[1].title).toBe('Go for a run');
  });

  test('should delete a task by ID', () => {
    const task1 = createTask('Task to delete');
    createTask('Task to keep');

    const deleted = deleteTask(task1.id);
    expect(deleted).toBe(true);
    expect(listTasks()).toHaveLength(1);
    expect(listTasks()[0].title).toBe('Task to keep');
  });

  test('should return false if task to delete does not exist', () => {
    createTask('Existing task');
    const deleted = deleteTask('non-existent-id');
    expect(deleted).toBe(false);
    expect(listTasks()).toHaveLength(1);
  });
});
