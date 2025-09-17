// taskService.js

let tasks = [];
let nextId = 1;

export function addTask(judul) {
  const task = {
    id: nextId++,
    judul,
  };
  tasks.push(task);
  return task;
}

export function getAllTask() {
  return tasks;
}

export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}
