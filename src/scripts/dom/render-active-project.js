import { getActiveProject, assignActiveProject, deleteTaskHandler, projectsArray, loadTaskForm } from "../brain/handlers";


export function renderActiveProject() {
  const displayDivElement = document.querySelector('.display');
  const displayH2Element = document.querySelector('.display-header');

  // if there are no projects in the array, render a message to the user and return
  if (!projectsArray[0]) {
    displayH2Element.textContent = 'No projects yet. Click the + button to create a project.';
    displayDivElement.textContent = ` No tasks to display. Click the + button to create a project.`;
    return
  }

  // if there is no active project that means the user deleted the active project.
  // make the first project in the array the active project.
  if (!getActiveProject()) {
    assignActiveProject(projectsArray[0]);
  }

  // set the display header to the active project title
  displayH2Element.textContent = getActiveProject().title;
  
  // clear the task list display
  removeElementsChildren(displayDivElement);

  // if there are no tasks in the active project, render a message to the user and return
  if (getActiveProject().taskList.length === 0) {
    displayDivElement.textContent = ` No tasks to display.`;
    return
  }

  // append the list of task to the div that displays the tasks
  displayDivElement.appendChild(createTaskListElement());

  createLiForEachTask();
}

/* FUNCTIONS FOR renderActiveProject() */
function createTaskListElement() {
  const taskListElement = document.createElement('ul');
  taskListElement.classList.add('task-list');
  return taskListElement;
}

function createLiForEachTask() {
  const taskListElement = document.querySelector('.task-list');
  // loop through list of tasks and create a new list item for each task
  getActiveProject().taskList.forEach(task => {
    const taskItem = document.createElement('li');
    const btnDeleteTask = document.createElement('button');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-task-id', task.id)
    btnDeleteTask.classList.add('btn-delete-task');
    btnDeleteTask.id = task.id;
    btnDeleteTask.textContent = 'X';
    console.log(`task.date = ${task.date}`)
    if (task.date !== "") {
      taskItem.textContent = `${task.title} - due ${task.date}`;
    } else {
      taskItem.textContent = task.title; 
    }
    taskListElement.appendChild(taskItem);
    taskListElement.appendChild(btnDeleteTask);
    taskItem.addEventListener('click', loadTaskForm);
    btnDeleteTask.addEventListener('click', deleteTaskHandler);
  });
}

/* Other Functions */
function removeElementsChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}