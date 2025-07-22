export async function run(command: string): Promise<void> {
  console.log(`Executing command: ${command}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}
