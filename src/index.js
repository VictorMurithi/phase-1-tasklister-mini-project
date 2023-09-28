document.addEventListener("DOMContentLoaded", () => {
    let form =document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        handleTasks(e.target['new-task-description'].value)
        form.reset()
    })
})
 function handleTasks(task){
    let li = document.createElement('li');
    let btn = document.createElement("button")
    btn.addEventListener('click',handleDelete)
    btn.textContent = " x "

    let taskText = document.createTextNode(task);

    li.appendChild(taskText)
    li.appendChild(btn)

    document.querySelector('#tasks').appendChild(li)
 }
function handleDelete(e){
    e.target.parentNode.remove()
}