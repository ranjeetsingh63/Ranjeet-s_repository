document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));

    addTaskBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();

        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        todoInput.value = ""
        // console.log(tasks);
        
    });

    function renderTask(task){
        console.log(task);
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        if(task.completed) li.classList.add("completed");
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `
    }

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})