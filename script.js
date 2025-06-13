// Run the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


     loadTasks();

    // Add event listeners for adding tasks
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
             const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        }
    });
    function addTask() {
        const taskText = taskInput.value.trim();

        
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

      
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        
        taskInput.value = '';
    }

   
    addButton.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
