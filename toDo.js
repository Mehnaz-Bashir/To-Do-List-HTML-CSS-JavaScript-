const taskInput = document.getElementById("addtask");
const addbtn = document.getElementById("addbtn");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

addbtn.addEventListener("click", () =>{
    const task = taskInput.ariaValueMax.trim();

    if(task === ""){
        error.textContent = "please enter a task!";
        error.classList.add("error");
        return;
    }

    error.textContent = "";
    error.classList.remove("error");

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("Span");
    span.textContent = task;

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";
    dltbtn.classList.add("delete-btn");

    span.addEventListener("click", () =>{
        span.classList.toggle("completed");
    });
})