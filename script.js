const bodyEl = document.body;
const createTaskEl = document.querySelector(".create-task");
let tasks = [];

createTaskEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  //Resettare il valore dell'input
});

const createTask = (value) => {
  const task = document.createElement("div");
  const taskText = document.createElement("p");
  const myTasks = document.querySelector("my-tasks");

  tasks.push(value);

  taskText.textContent = value;

  bodyEl.appendChild(task);
  task.appendChild(taskText);
};
