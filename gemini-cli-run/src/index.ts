<<<<<<< HEAD
export function run(command: string): Promise<void> {
  console.log(`Executing command: ${command}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}
=======
export async function run(command: string): Promise<void> {
  console.log(`Executing command: ${command}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}
>>>>>>> ee36ff2df8358b1ef8c35b2ce574bb802b0f1dc3
