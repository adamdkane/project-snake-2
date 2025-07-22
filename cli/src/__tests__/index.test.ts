
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

describe('CLI', () => {
    it('should create a task', async () => {
        const { stdout } = await execAsync('ts-node src/index.ts task create "My new task"');
        expect(stdout).toContain('Task created with ID:');
    });

    it('should list tasks', async () => {
        const { stdout } = await execAsync('ts-node src/index.ts task list');
        expect(stdout).toContain('My new task');
    });

    it('should delete a task', async () => {
        // First, create a task to delete
        const { stdout: createStdout } = await execAsync('ts-node src/index.ts task create "Task to delete"');
        const match = createStdout.match(/Task created with ID: (\d+)/);
        if (!match) {
            throw new Error('Could not get task ID');
        }
        const id = match[1];

        // Now delete it
        const { stdout: deleteStdout } = await execAsync(`ts-node src/index.ts task delete ${id}`);
        expect(deleteStdout).toContain(`Task with ID ${id} has been deleted.`);

        // Verify it's gone
        const { stdout: listStdout } = await execAsync('ts-node src/index.ts task list');
        expect(listStdout).not.toContain('Task to delete');
    });
});
