let list = document.querySelector(".list");
let taskInput = document.querySelector(".task");
let add = document.querySelector(".add");

const loadTask = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => createTask(task));
};

const createTask = (task) => {
    let li = document.createElement("li");
    let delbtn = document.createElement("button");

    li.innerText = task;
    delbtn.innerText = "delete";

    li.appendChild(delbtn);
    list.appendChild(li);

    delbtn.addEventListener("click", () => {
        li.remove();
        removeFromStorage(task);
    });

};

// ---------- SAVE TO LOCAL STORAGE ----------
function saveToStorage(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ---------- REMOVE FROM STORAGE ----------
function removeFromStorage(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks = tasks.filter(t => t !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


add.addEventListener("click", () => {
    let task = taskInput.value;

    if (task.trim() === "") return;

    createTask(task);
    saveToStorage(task);

    taskInput.value = "";
});

window.onload = loadTask;
