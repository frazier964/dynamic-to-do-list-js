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
            localStorage.setItem('tasks', JSON.stringify(storedTasks));

             const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        }
    });
    function addTask() {
         const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    // ✅ Add class to li if needed for styling
    li.classList.add('task-item');
        const taskText = taskInput.value.trim();
 if (save) {
        // ✅ Get existing tasks
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        // ✅ Add new task
        storedTasks.push(taskText);

        // ✅ Save updated tasks using JSON.stringify
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    storedTasks.forEach(taskText => addTask(taskText, false));
}

function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Remove the task
    storedTasks = storedTasks.filter(task => task !== taskText);

    // ✅ Save updated list using JSON.stringify
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
        
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
