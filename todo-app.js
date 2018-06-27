const todo = [{
  task: "Walk Stella",
  completed: false
}, {
  task: "Cook dinner",
  completed: true
}, {
  task: "Clean shower",
  completed: false
}, {
  task: "Program",
  completed: true
}, {
  task: "Sleep",
  completed: false
}, {
  task: "Workout",
  completed: false
}]


const filter = {
  searchText: ""
}

const renderTodos = function (todo, filter) {
  const filteredTasks = todo.filter(function (item) {
    return item.task.toLowerCase().includes(filter.searchText.toLowerCase())
  })

  document.querySelector('#filtered-tasks').innerHTML = ''

  let numToComplete = filteredTasks.filter(function (item){
    return !item.completed
  })

  const itemsToCompleteParagraph = document.createElement('h2')
itemsToCompleteParagraph.textContent = `You have ${numToComplete.length} tasks still outstanding:`
document.querySelector('#filtered-tasks').appendChild(itemsToCompleteParagraph)
  
  filteredTasks.forEach(function (item) {
    let newElement = document.createElement('p')
    newElement.textContent = item.task
    document.querySelector('#filtered-tasks').appendChild(newElement)
  })
}

renderTodos(todo, filter)

document.querySelector('#search-tasks').addEventListener('input', function (e) {
  filter.searchText = e.target.value
  renderTodos(todo, filter)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  
})

// 1. Create a checkbox and setup event listener -> "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items





