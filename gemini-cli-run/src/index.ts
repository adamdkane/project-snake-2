<<<<<<< HEAD
export async function run(command: string): Promise<void> {
  console.log(`Executing command: ${command}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}
=======
export function run(command: string): Promise<void> {
  console.log(`Executing command: ${command}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}
>>>>>>> 518b2bd (feat: Implement gemini-cli-run package structure and mock function)
