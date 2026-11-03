function addTask(){
    const getTask = document.getElementById("addtask");
    const addTask =  addTask.value.trim();
    if(addTask === ""){
        alert("Please enter a Task!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = addTask;
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete task";
    document.querySelector("ul").appendChild(li);
    dltBtn.addEventListener("click",() => {
        li.remove();
    })
    li.appendChild(dltBtn);
    if(taskList.children.length === 0){
        console.log("No tasks available");
    }
}
