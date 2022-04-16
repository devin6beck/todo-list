import { deleteProjectHandler, deleteTaskHandler, projectsArray, projectClickedHandler, projectDoubleClickedHandler, taskCreateOrClickedHandler } from "./handlers";


export function renderProjectList() {
  const projectList = document.querySelector('.project-list');
  clearProjectList(projectList);
  createLiForEachProject(projectList);
  addEventListenersToProjects();
  addEventListenersToProjectDeleteButtons();
}


function addEventListenersToProjects() {
  // if project is clicked, make it active and render the display.
  // if project is double clicked, make it active and display project form.
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', projectClickedHandler)

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

export function renderTaskListDisplay() {
  const displayDivElement = document.querySelector('.display');
  const displayH2Element = document.querySelector('.display-header');
  const taskListElement = document.createElement('ul');
  taskListElement.classList.add('task-list');
  let activeProject = projectsArray.find(project => project.active === true);
  if (!activeProject) {
    displayH2Element.textContent = 'No active project';
    displayDivElement.textContent = ` No tasks to display.`;
    return
  }

  displayH2Element.textContent = activeProject.title;
  
  // clear the display
  while(displayDivElement.firstChild) {
    displayDivElement.removeChild(displayDivElement.firstChild);
  }

  if (activeProject.taskList.length === 0) {
    displayDivElement.textContent = ` No tasks to display.`;
    return
  }
  
  // Add each task from the active project to the taskHolder
  activeProject.taskList.forEach(task => {
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
  
  // Add the task holder to the display
  displayDivElement.appendChild(taskListElement);

  const taskItems = document.querySelectorAll('.task-item');

  taskItems.forEach(task => {
    task.addEventListener('click', taskCreateOrClickedHandler)
  });
  
  const btnDeleteTask = document.querySelectorAll('.btn-delete-task');
  btnDeleteTask.forEach(btn => {
    btn.addEventListener('click', deleteTaskHandler);
  });
}


export function makeActiveProject(project) {
  // const activeProject = document.querySelector('.active-project');
  // if (activeProject) {
  //   activeProject.classList.remove('active-project');
  // }
  project.active = true;
}

export function disableCurrentActiveProject() {
  const activeProject = projectsArray.find(project => project.active === true);
  if (activeProject) {
    activeProject.active = false;
  }
}