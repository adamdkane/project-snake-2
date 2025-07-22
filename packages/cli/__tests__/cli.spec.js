const { createTaskCommand, listTasksCommand, deleteTaskCommand } = require('../commands');
const core = require('@gemini-snake/core');

jest.mock('@gemini-snake/core', () => ({
  createTask: jest.fn(),
  listTasks: jest.fn(),
  deleteTask: jest.fn(),
}));

describe('cli commands', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.clearAllMocks();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should create a task', () => {
    createTaskCommand({ name: 'test-task' });
    expect(core.createTask).toHaveBeenCalledWith({ name: 'test-task' });
    expect(consoleSpy).toHaveBeenCalledWith('Task "test-task" created.');
  });

  it('should list tasks', () => {
    core.listTasks.mockReturnValue([{ name: 'test-task' }]);
    listTasksCommand();
    expect(core.listTasks).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Tasks:');
    expect(consoleSpy).toHaveBeenCalledWith('- test-task');
  });

  it('should delete a task', () => {
    core.deleteTask.mockReturnValue(true);
    deleteTaskCommand({ name: 'test-task' });
    expect(core.deleteTask).toHaveBeenCalledWith('test-task');
    expect(consoleSpy).toHaveBeenCalledWith('Task "test-task" deleted.');
  });

  it('should not delete a task that does not exist', () => {
    core.deleteTask.mockReturnValue(false);
    deleteTaskCommand({ name: 'test-task' });
    expect(core.deleteTask).toHaveBeenCalledWith('test-task');
    expect(consoleSpy).toHaveBeenCalledWith('Task "test-task" not found.');
  });
});