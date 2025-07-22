interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

export function createTask(title: string): Task {
  const newTask: Task = {
    id: Math.random().toString(36).substr(2, 9), // Simple unique ID
    title,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
}

export function listTasks(): Task[] {
  return [...tasks]; // Return a copy to prevent external modification
}

export function deleteTask(id: string): boolean {
  const initialLength = tasks.length;
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}