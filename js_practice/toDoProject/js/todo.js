const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const button = event.target;
  const li = button.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function printToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  li.className =
    "flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 transition-all duration-300 hover:bg-white/20 group";

  const span = document.createElement("span");
  span.textContent = newToDoObj.text;
  span.className = "text-xl text-shadow truncate mr-4 flex-grow text-left";

  const button = document.createElement("button");
  button.textContent = "✖"; 
  button.className =
    "text-white/50 hover:text-red-400 focus:outline-none transition-colors duration-200 opacity-0 group-hover:opacity-100 text-lg";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handelTodoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  printToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handelTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printToDo);
}
