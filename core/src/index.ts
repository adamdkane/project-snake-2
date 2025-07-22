interface Task {
    id: number;
    title: string;
}

let tasks: Task[] = [];
let nextId = 1;

export async function createTask(title: string): Promise<Task> {
    const task = { id: nextId++, title };
    tasks.push(task);
    return task;
}

export async function listTasks(): Promise<Task[]> {
    return tasks;
}

export async function deleteTask(id: number): Promise<void> {
    tasks = tasks.filter(task => task.id !== id);
}
