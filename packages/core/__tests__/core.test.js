const { createTask, listTasks, deleteTask } = require('../index');
const { tasks } = require('../store');

describe('core', () => {
  beforeEach(() => {
    tasks.length = 0;
  });

  afterAll(() => {
    tasks.length = 0;
  });

  it('should create a task', () => {
    createTask('test task');
    expect(listTasks()).toContain('test task');
  });

  it('should list tasks', () => {
    createTask('test task 1');
    createTask('test task 2');
    expect(listTasks()).toEqual(['test task 1', 'test task 2']);
  });

  it('should delete a task', () => {
    createTask('test task');
    deleteTask('test task');
    expect(listTasks()).not.toContain('test task');
  });
});