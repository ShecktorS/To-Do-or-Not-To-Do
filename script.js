const bodyEl = document.body;
const createTaskEl = document.querySelector(".create-task");
const createTaskDiv = document.querySelector("#newTask");
let tasks = [];

createTaskEl.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks.push(createTaskDiv.value);
  createTask(tasks);
});

const createTask = (val) => {
  const task = document.createElement("div");
  const taskText = document.createElement("p");
  const myTasks = document.querySelector(".my-tasks");
  myTasks.textContent = "";

  taskText.textContent = val;

  createTaskDiv.value = "";

  task.appendChild(taskText);
  myTasks.appendChild(task);
};
