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
    const btnDeleteTask = document.createElement('button');
    taskItem.classList.add('task-item');
    btnDeleteTask.classList.add('btn-delete-task');
    btnDeleteTask.id = task.id;
    btnDeleteTask.textContent = 'X';
    taskItem.textContent = `${task.title} due ${task.date}`; 
    taskHolder.appendChild(taskItem);
    taskHolder.appendChild(btnDeleteTask);
  });

  // Add the task holder to the display
  display.appendChild(taskHolder);

  const btnDeleteTask = document.querySelectorAll('.btn-delete-task');
  btnDeleteTask.forEach(btn => {
    btn.addEventListener('click', (e) => {
      project.taskList.forEach(task => {
        if (task.id === e.target.id) {
          project.taskList.splice(project.taskList.indexOf(task), 1);
          renderDisplay(project);
        }
      })
    });
  });


}



