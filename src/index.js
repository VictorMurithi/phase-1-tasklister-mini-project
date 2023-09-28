document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form')
    const input = document.querySelector('new-task-description')
    const list = document.querySelector('tasks')

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const inputText = input.value;
        const taskList = document.createElement('li')
        taskList.textContent = inputText;
        list.appendChild(taskList);
    })
})

