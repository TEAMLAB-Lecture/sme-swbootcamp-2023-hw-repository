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

function unselectAllTasks() {
    const checkboxes = document.getElementsByName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
}

function removeSelected() {
    const checkboxes = document.getElementsByName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].parentElement.parentElement.remove();
        }
      }
}

function removeAll() {
    const checkboxes = document.getElementsByName('checkbox');
    const checkboxesArray = Array.from(checkboxes);

    checkboxesArray.forEach(function (checkbox) {
        checkbox.parentElement.parentElement.remove();
    });
    
    // checkboxes.parentElement.parentElement.remove();
    // let i = 0;
    // while (checkboxes.length > i) {
    //     checkboxes[i].parentElement.parentElement.remove();
    //     i++
    //   }
}


var url = 'https://github.com/AnYeHyeon/img/blob/main/KakaoTalk_20230705_150105913.jpg?raw=true';
 
var image = new Image();
image.src = url;
document.getElementById('img_container').appendChild(image);
image.setAttribute("id", "sudal")

function gotomyblog() {
    document.querySelector('button').addEventListener('click', e=>{
    	window.open('https://busansudal.tistory.com/');
    });
}