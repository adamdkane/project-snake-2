import { createTask, listTasks, deleteTask } from '../src/index';

function runTests() {
  console.log('Running tests for core package...');

  // Test createTask
  const task1 = createTask('Buy groceries');
  console.assert(task1.title === 'Buy groceries', 'Test Case 1 Failed: createTask title mismatch');
  console.assert(task1.completed === false, 'Test Case 2 Failed: createTask completed status mismatch');
  console.assert(listTasks().length === 1, 'Test Case 3 Failed: createTask did not add task to list');

  const task2 = createTask('Walk the dog');
  console.assert(listTasks().length === 2, 'Test Case 4 Failed: createTask did not add second task');

  // Test listTasks
  const allTasks = listTasks();
  console.assert(allTasks.length === 2, 'Test Case 5 Failed: listTasks did not return all tasks');
  console.assert(allTasks[0].title === 'Buy groceries', 'Test Case 6 Failed: listTasks order or content incorrect');

  // Test deleteTask
  const deleted = deleteTask(task1.id);
  console.assert(deleted === true, 'Test Case 7 Failed: deleteTask did not return true for successful deletion');
  console.assert(listTasks().length === 1, 'Test Case 8 Failed: deleteTask did not remove task');
  console.assert(listTasks()[0].title === 'Walk the dog', 'Test Case 9 Failed: deleteTask removed wrong task');

  const notFound = deleteTask('999'); // Non-existent ID
  console.assert(notFound === false, 'Test Case 10 Failed: deleteTask returned true for non-existent task');
  console.assert(listTasks().length === 1, 'Test Case 11 Failed: deleteTask modified list for non-existent task');

  console.log('All tests completed.');
}

runTests();