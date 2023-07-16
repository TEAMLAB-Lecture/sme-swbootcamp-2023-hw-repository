function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var newTask = document.createElement("ul");
        newTask.setAttribute("class", "task")
        newTask.innerHTML = `<span id="taskbox"><input type="checkbox" name="checkbox"><input type="text" name="task" value="${taskInput.value}" readOnly></input></span>`;
        newTask.innerHTML += `<span id="save"><input type="button" class="modisavebtns" value="수정" onclick="readOnlyFalse(this)"><input type="button" class="modisavebtns" value="저장" onclick="readOnlyTrue(this)"></span>`;
        // newTask.innerText = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }   else {
            alert('Input the task.')
    }
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

// 엔터키로도 입력되도록 함.
var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function(event) {
  if (window.event.keyCode === 13) {
    event.preventDefault(); // Prevent form submission
    addTask();
  }
});

function selectAllTasks() {
    const checkboxes = document.getElementsByName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
}