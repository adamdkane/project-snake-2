const cli = require('../index');
const { tasks } = require('@gemini-snake/core/store');

describe('cli', () => {
  let consoleSpy;

  beforeEach(() => {
    tasks.length = 0;
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should create a task', async () => {
    await cli.parseAsync('task-create "test task"');
    expect(consoleSpy).toHaveBeenCalledWith('Task created: test task');
  });

  it('should list tasks', async () => {
    await cli.parseAsync('task-create "test task"');
    consoleSpy.mockClear();
    await cli.parseAsync('task-list');
    expect(consoleSpy).toHaveBeenCalledWith('Tasks:', ['test task']);
  });

  it('should delete a task', async () => {
    await cli.parseAsync('task-create "test task"');
    consoleSpy.mockClear();
    await cli.parseAsync('task-delete "test task"');
    expect(consoleSpy).toHaveBeenCalledWith('Task deleted: test task');
  });
});