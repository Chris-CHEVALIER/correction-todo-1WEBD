let tasks = []

const form = document.querySelector('form')
form.addEventListener('submit', e => addTodo(e))

function addTodo (e) {
  e.preventDefault()
  const input = document.querySelector('#task')
  if (input.value.length > 0) {
    console.log(input.value)
    tasks.push({
      name: input.value,
      completed: false,
      id: tasks.length + 1
    })
    const li = document.createElement('li') // <li></li>

    li.textContent = input.value
    input.value = ''

    const ul = document.querySelector('ul')

    ul.appendChild(li)
  }
}

function displayTodos () {
  tasks.forEach(task => {
    console.table(task)
  })
}

/*
addTodo("homwork");
addTodo("Cook");
*/

function complete (id) {
    /*
    for (let task in tasks) {
        if (task.id === id)
        {
            task.completed = true;
        }
    }
    */
  tasks[id - 1].completed = true
}

function removeTodo (id) {
  tasks.pop(id - 1)
}
