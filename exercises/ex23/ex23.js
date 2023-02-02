const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');
const tasksList = document.querySelector('.to-do-list');

// create a <li> html element
function createElementLi() {
    const li = document.createElement('li');
    return li;
}

// clear the text box
function clearInput() {
    inputText.value = '';
    inputText.focus();
}

// add remove button in the li element
function addRemoveButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'x';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
    return li;
}

// create a task to the to-do-list
function createTask(inputText) {
    const li = createElementLi();
    li.innerText = inputText
    tasksList.appendChild(li);
    clearInput();
    li = addRemoveButton(li);
    saveTasks()
}

// get the 'ENTER' button click event
inputText.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        createTask(inputText.value);
    }
})

// get the click event
inputButton.addEventListener('click', function () {
    if (!inputText.value) return;
    createTask(inputText.value);
})

// remove the task from to-do-list
document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }
})

// ERROR 
function saveTasks () {
    const liList = tasksList.querySelectorAll('li');
    const workList = [];

    for (task of liList) {
        let taskText = tasksList.innerText;
        taskText = taskText.replace('x', '').trim();
        workList.push(taskText);
    }

    const tasksJSON = JSON.stringify(workList);
    localStorage.setItem('myTasks', tasksJSON);
}

function loadTasks () {
    const tasks = localStorage.getItem('myTasks');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        createTask(task);
    }
}

loadTasks ();