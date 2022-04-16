import { deleteProjectHandler, deleteTaskHandler, projectsArray, projectClickedHandler, projectDoubleClickedHandler, taskCreateOrClickedHandler } from "./handlers";


export function renderProjectList() {
  const projectList = document.querySelector('.project-list');
  clearProjectList(projectList);
  createLiForEachProject(projectList);
  addEventListenersToProjects();
  addEventListenersToProjectDeleteButtons();
}


// if a project is clicked, make it active and render the display.
// if a project is double clicked, make it active and display project form.
function addEventListenersToProjects() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', projectClickedHandler);
    project.addEventListener('dblclick', projectDoubleClickedHandler)
  })
}

function addEventListenersToProjectDeleteButtons() {
  const btnDeleteProjects = document.querySelectorAll('.btn-delete-project');
  btnDeleteProjects.forEach(btn => {
    btn.addEventListener('click', deleteProjectHandler)
  }); 
}

function clearProjectList(projectList) {
  while( projectList.firstChild ){
    projectList.removeChild( projectList.firstChild );
  }
}

function createLiForEachProject(projectList) {
    // loop through list of projects and create a new list item for each project
    for (let i = 0; i < projectsArray.length; i++) {
      const projectContainer = document.createElement('div');
      const li = document.createElement('li');
      const btnDeleteProject = document.createElement('button');
      
      projectContainer.className = 'project-container';
      li.className = 'project';
      btnDeleteProject.className = 'btn-delete-project';
      
      // add project title to li text content and "X" to btnDeleteProject text content
      li.textContent = projectsArray[i].title;
      btnDeleteProject.textContent = 'X';

      // create a unique id for each project using the date and time created with
      // everything but numbers removed. 
      btnDeleteProject.id = projectsArray[i].dateCreated.replace(/\D/g, '');
      li.id = projectsArray[i].dateCreated.replace(/\D/g, '');

      projectContainer.appendChild(li);
      projectContainer.appendChild(btnDeleteProject);
      projectList.appendChild(projectContainer);
    }
}

export function renderActiveProject() {
  const displayDivElement = document.querySelector('.display');
  const displayH2Element = document.querySelector('.display-header');

  // if there is no active project, display a message informing the user.
  if (!getActiveProject()) {
    displayH2Element.textContent = 'No active project';
    displayDivElement.textContent = ` No tasks to display.`;
    return
  }

  // set the display header to the active project title
  displayH2Element.textContent = getActiveProject().title;
  
  // clear the task list display
  removeElementsChildren(displayDivElement);

  createTaskListElement(displayDivElement);


  if (getActiveProject().taskList.length === 0) {
    displayDivElement.textContent = ` No tasks to display.`;
    return
  }

  createLiForEachTask()

  const taskItems = document.querySelectorAll('.task-item');

  taskItems.forEach(task => {
    task.addEventListener('click', taskCreateOrClickedHandler)
  });
  
  const btnDeleteTask = document.querySelectorAll('.btn-delete-task');
  btnDeleteTask.forEach(btn => {
    btn.addEventListener('click', deleteTaskHandler);
  });
}

function createTaskListElement(displayDivElement) {
  const taskListElement = document.createElement('ul');
  taskListElement.classList.add('task-list');
  // Add the task holder to the display
  displayDivElement.appendChild(taskListElement);
}

function getTaskListElement() {
  return document.querySelector('.task-list');
}

function removeElementsChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createLiForEachTask() {
  const taskListElement = getTaskListElement();
  console.log(`Here is the taskListElement: ${taskListElement}`)
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
  });
}



export function makeProjectActive(project) {
  if (getActiveProject()) {
    getActiveProject().active = false
  }
  project.active = true;
}

function getActiveProject() {
  return projectsArray.find(project => project.active === true);
}