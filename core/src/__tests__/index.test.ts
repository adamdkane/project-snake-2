import { createTask, listTasks, deleteTask } from '../index';

describe('Core Task Management', () => {
    beforeEach(() => {
        // Reset tasks before each test to ensure isolation
        // @ts-ignore - Accessing private variable for testing purposes
        tasks = [];
        // @ts-ignore
        nextId = 1;
    });

    it('should create a task', async () => {
        const task = await createTask('Test Task');
        expect(task).toEqual({ id: 1, title: 'Test Task' });
        const tasks = await listTasks();
        expect(tasks).toEqual([{ id: 1, title: 'Test Task' }]);
    });

    it('should list multiple tasks', async () => {
        await createTask('Task 1');
        await createTask('Task 2');
        const tasks = await listTasks();
        expect(tasks).toEqual([
            { id: 1, title: 'Task 1' },
            { id: 2, title: 'Task 2' },
        ]);
    });

    it('should delete a task', async () => {
        const task1 = await createTask('Task 1');
        await createTask('Task 2');
        await deleteTask(task1.id);
        const tasks = await listTasks();
        expect(tasks).toEqual([{ id: 2, title: 'Task 2' }]);
    });

    it('should not fail when deleting a non-existent task', async () => {
        await createTask('Task 1');
        await deleteTask(999);
        const tasks = await listTasks();
        expect(tasks).toEqual([{ id: 1, title: 'Task 1' }]);
    });
});
