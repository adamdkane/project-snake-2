import { createTask, listTasks, deleteTask } from '../src';

describe('Task Management', () => {
  beforeEach(() => {
    // Clear tasks before each test to ensure isolation
    // This is a hack for in-memory array, in a real scenario, you'd reset a database or mock it.
    const tasks = listTasks();
    while(tasks.length > 0) {
      deleteTask(tasks[0].id);
    }
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
    createTask('Write code');
    const tasks = listTasks();
    expect(tasks).toHaveLength(2);
    expect(tasks[0].title).toBe('Read a book');
    expect(tasks[1].title).toBe('Write code');
  });

  test('should delete a task by id', () => {
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
