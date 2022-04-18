import { getActiveProject, assignActiveProject, deleteProjectHandler, deleteTaskHandler, projectsArray, projectClickedHandler, loadTaskForm, loadProjectForm } from "./handlers";


export function renderProjectList() {
  /* 
  This function clears the list of projects from the display
  and then creates a new list of projects from the projectsArray to display.
   */
  const projectList = document.querySelector('.project-list');
  while(projectList.firstChild){
    projectList.removeChild(projectList.firstChild);
  }
  createLiForEachProject(projectList);
}

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

/* FUNCTIONS FOR renderProjectList */

function clearProjectList(projectList) {
  while( projectList.firstChild ){
    projectList.removeChild( projectList.firstChild );
  }
}

function createLiForEachProject(projectList) {
    // loop through list of projects and create a new list item for each project
    for (let i = 0; i < projectsArray.length; i++) {
      // create elements for the project
      const projectContainerDivElement = document.createElement('div');
      const projectLiElement = document.createElement('li');
      const btnDeleteProjectElement = document.createElement('button');
      
      // add class names to the elements
      projectContainerDivElement.className = 'project-container';
      projectLiElement.className = 'project';
      btnDeleteProjectElement.className = 'btn-delete-project';
      
      // add project title to li text content and "X" to btnDeleteProject text content
      projectLiElement.textContent = projectsArray[i].title;
      btnDeleteProjectElement.textContent = 'X';

      // create a unique id for each project using the date and time created with
      // everything but numbers removed. 
      btnDeleteProjectElement.id = projectsArray[i].dateCreated.replace(/\D/g, '');
      projectLiElement.id = projectsArray[i].dateCreated.replace(/\D/g, '');

      projectContainerDivElement.appendChild(projectLiElement);
      projectContainerDivElement.appendChild(btnDeleteProjectElement);
      projectList.appendChild(projectContainerDivElement);

      // add event listeners to the project

      // if a project is clicked, make it active and render the display.
      projectLiElement.addEventListener('click', projectClickedHandler);
      // if a project is double clicked, make it active and display project form.
      projectLiElement.addEventListener('dblclick', loadProjectForm)
      btnDeleteProjectElement.addEventListener('click', deleteProjectHandler)
    }
}

/* Other Functions */
function removeElementsChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}