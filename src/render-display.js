export default function renderDisplay(project) {
  const display = document.querySelector('.display');
  const displayHeader = document.querySelector('.display-header');
  const taskHolder = document.createElement('ul');

  taskHolder.classList.add('task-holder');
  displayHeader.textContent = project.title;

  // clear the display
  while(display.firstChild) {
    display.removeChild(display.firstChild);
  }

  // Add each task from the active project to the display
  project.taskList.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.textContent = `${task.title} due ${task.date}`; 
    taskHolder.appendChild(taskItem);
  });

  // Add the task holder to the display
  display.appendChild(taskHolder);
}

