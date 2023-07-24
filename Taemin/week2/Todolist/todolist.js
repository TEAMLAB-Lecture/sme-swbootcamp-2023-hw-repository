// HTML에서 할 일 폼, 할 일 목록, 전체 선택 버튼, 전체 해제 버튼, 선택 항목 삭제 버튼 선택
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const selectAllBtn = document.querySelector("#select-all");
const deselectAllBtn = document.querySelector("#deselect-all");
const deleteSelectedBtn = document.querySelector("#delete-selected");

// 체크박스 상태를 변경
function changeCheckboxStatus(status) {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = status;  
    });
}


function createTodoItem(todoText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const todoElement = document.createElement("input");
    todoElement.type = "text";
    todoElement.value = todoText;
    todoElement.readOnly = true;
    todoElement.classList.add("todo-text");
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", function() {
        todoElement.readOnly = !todoElement.readOnly;
        editBtn.textContent = todoElement.readOnly ? "수정" : "저장";
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        todoItem.remove();
    });
    todoItem.append(checkbox, todoElement, editBtn, deleteBtn);
    return todoItem;
}

// eventlistner 추가
// 새로운 to-do item 생성, 추가 (제출하면)
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const todoInput = document.querySelector("#todo-input");
    const todoText = todoInput.value;
    todoInput.value = "";
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
});
// 버튼이 클릭되면, 모든 체크박스를 체크
selectAllBtn.addEventListener("click", function() {
    changeCheckboxStatus(true);
});


//버튼이 클릭되면, 모든 체크박스의 체크를 해제
deselectAllBtn.addEventListener("click", function() {
    changeCheckboxStatus(false);
});


// 버튼이 클릭되면, 체크된 모든 할 일 아이템을 삭제
deleteSelectedBtn.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    });
});

