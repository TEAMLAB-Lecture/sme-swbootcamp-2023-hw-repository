function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var newTask = document.createElement("ul");
        newTask.setAttribute("class", "task")
        newTask.innerHTML = `<span id="taskbox"><input type="checkbox" name="checkbox"><input type="text" value="${taskInput.value}" readOnly></input></span>`;
        newTask.innerHTML += `<span id="save"><input type="button" class="modisavebtns" value="수정" onclick="readOnlyFalse(this)"><input type="button" class="modisavebtns" value="저장" onclick="readOnlyTrue(this)"></span>`;
        // newTask.innerText = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }   else {
            alert('Input the task.')
    }
}

// 엔터키로도 입력되도록 함.
var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function(event) {
  if (window.event.keyCode === 13) {
    event.preventDefault(); // Prevent form submission
    addTask();
  }
});