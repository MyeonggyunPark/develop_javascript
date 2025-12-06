const toDoList = document.querySelector("#to-do-list");

function addNewTodo(text) {
  const newToDo = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.type = "button";
  newBtn.classList.add("doneBtn");

  newSpan.textContent = text;
  newBtn.textContent = "완료";

  newToDo.append(newSpan);
  newToDo.append(newBtn);

  toDoList.append(newToDo);
}

function updateToDo(event) {
  if (event.target.classList.contains("doneBtn")) {
    const li = event.target.parentElement;
    li.classList.toggle("done");
  }
}

toDoList.addEventListener("click", updateToDo);

addNewTodo("가계부 정리하기");
addNewTodo("자바스크립트 복습하기");
