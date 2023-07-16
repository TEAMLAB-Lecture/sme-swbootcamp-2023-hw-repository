var inputText = document.getElementById('do');
const addButton = document.getElementById('enterButton');
var list = document.getElementById('addList');
const selectAllButton = document.getElementById('selectAll');
const clearAllButton = document.getElementById('clearAll');
const selectDeleteButton = document.getElementById('selectDelete');
const deleteAllButton = document.getElementById('deleteAll');

function addList() {
    let text = inputText.value;
    if (text.trim() === '') {
        alert('할 일을 입력해주세요!');
    }
    else {
        addToList(text);
        inputText.value = '';
    }
}

inputText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addList();
    }
});

addButton.addEventListener('click', function() {
    addList();
});

function addToList(title) {
    let newItem = document.createElement('li');
// 체크박스 생성
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    newItem.appendChild(checkbox);
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            newItem.classList.add('selected');
        } else {
            newItem.classList.remove('selected');
        }
    });
// 할 일 텍스트
    const span = document.createElement('span');
    span.innerText = title;
    newItem.appendChild(span);
// 수정버튼
    const editButton = document.createElement('button');
    editButton.innerText = '수정';
    editButton.addEventListener('click', function() {
        const newTitle = prompt('다른 할일을 적어주세요!', span.innerText);
        if (newTitle && newTitle.trim() !== '') {
            span.innerText = newTitle;
        }
    });
    newItem.appendChild(editButton);
//삭제버튼
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.addEventListener('click', function() {
        newItem.remove();
    });
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
}

// 밑의 버튼들
selectAllButton.addEventListener('click', function() {
    let theList = list.querySelectorAll('input[type="checkbox"]');
    theList.forEach(function(checkbox) {
        checkbox.checked = true;
        checkbox.parentElement.classList.add('selected');
    });
});

clearAllButton.addEventListener('click', function() {
    let theList = list.querySelectorAll('input[type="checkbox"]');
    theList.forEach(function(checkbox) {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('selected');
    });
});

selectDeleteButton.addEventListener('click', function() {
    let theCheckbox = list.querySelectorAll('.selected');
    theCheckbox.forEach(function(checkbox) {
        checkbox.remove();
    });
});

deleteAllButton.addEventListener('click', function() {
    list.innerHTML = '';
});
