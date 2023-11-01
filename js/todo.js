const todoInput = document.getElementById("todo-input");
const showHideTodoButton = document.getElementById("show-hide-todo-button");
const todoBox = document.getElementById("todo-box");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

let todos = [];
let isTodoBoxVisible = true;

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleTodoBox() {
    if (isTodoBoxVisible) {
        todoBox.style.transition = "opacity 0.5s";
        todoBox.style.opacity = 0;
        setTimeout(() => {
            todoBox.style.display = "none";
            todoBox.style.transition = "";
        }, 500);
    } else {
        todoBox.style.transition = "opacity 0.5s";
        todoBox.style.display = "block";
        setTimeout(() => {
            todoBox.style.opacity = 1;
        }, 100);
    }
    isTodoBoxVisible = !isTodoBoxVisible;
}

function addTodo() {
    const newTodo = todoInput.value;
    if (newTodo.trim() === "") {
        return;
    }

    todos.push(newTodo);
    saveTodos();
    todoInput.value = "";
    displayTodos();
}

function removeTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    displayTodos();
}

function displayTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const todoItem = document.createElement("div");
        todoItem.textContent = todo;
        const removeButton = document.createElement("button");
        removeButton.textContent = "🆇";
        removeButton.addEventListener("click", () => removeTodo(index));
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
    });
}

// Load todos from localStorage on page load
const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
    todos = JSON.parse(savedTodos);
}

// Handle real-time update of todos in the box
setInterval(displayTodos, 1000);

showHideTodoButton.addEventListener("click", toggleTodoBox);

// Handle Enter key press for adding todos
todoInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
