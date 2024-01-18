document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('new-task-form');
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('taskList');
    const errorContainer = document.getElementById('error-message');
 
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
 
        const taskText = taskInput.value.trim();
 
        if (taskText === '') {
            showError('Task cannot be empty');
        } else {
            addTask(taskText);
            taskInput.value = '';
            hideError();
        }
    });
 
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.textContent = taskText;
 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });
 
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
 
    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }
 
    function hideError() {
        errorContainer.textContent = '';
        errorContainer.style.display = 'none';
    }
});
 