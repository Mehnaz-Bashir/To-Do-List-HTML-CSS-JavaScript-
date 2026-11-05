const taskInput = document.getElementById("addTask");
const addbtn = document.getElementById("addbtn");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const saveTasks = ()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const displayTasks = () =>{
    taskList.innerHTML = "";

    tasks.forEach((task, index) =>{
        const li = document.createElement("li");
        li.classList.add("task-item");

        const span = document.createElement("Span");
        span.textContent = task.text;

        if(task.completed){
            span.classList.add("completed");
        }

        const dltbtn = document.createElement("button");
        dltbtn.textContent = "Delete";
        dltbtn.classList.add("dltbtn");

        span.addEventListener("click", () =>{
            tasks[index].completed = !tasks[index].completed;

            saveTasks();
            displayTasks();
    });

    dltbtn.addEventListener("click", ()=>{
        tasks.splice(index, 1);
        saveTasks();
        displayTasks();
    });
    li.appendChild(span);
    li.appendChild(dltbtn);
    taskList.appendChild(li);

    });
};


addbtn.addEventListener("click", () =>{
    const task = taskInput.value.trim();

    if(task === ""){
        error.textContent = "Please enter a task!";
        error.classList.add("error");
        return;
    }

    error.textContent = "";
    error.classList.remove("error");

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();
    displayTasks();

    taskInput.value ="";

});