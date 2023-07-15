function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var newTask = ducument.createElement("li");
        newTask.innerText = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}
