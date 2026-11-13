let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let taskCounter = document.querySelector("#taskCounter");

function addTask(){
    let text = taskInput.value.trim();
    if(text === ""){
        alert("Please enter a valid task");
        return;
    }
    let li = document.createElement("li");
    li.classList.add("task");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "done";

    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";


    li.append(span);
    li.append(doneBtn);
    li.append(editBtn);
    li.append(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);