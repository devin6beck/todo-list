import { deleteProjectHandler, deleteTaskHandler, list, projectClickedHandler, taskClickedHandler, taskCreateOrClickedHandler } from "./handlers";


export function renderProjectList() {
  const projectList = document.querySelector('.project-list');
  while( projectList.firstChild ){
    projectList.removeChild( projectList.firstChild );
  }
  
  for (let i = 0; i < list.length; i++) {
    const projectContainer = document.createElement('div');
    const li = document.createElement('li');
    const btnDeleteProject = document.createElement('button');
    
    projectContainer.className = 'project-container';
    li.className = 'project';
    btnDeleteProject.className = 'btn-delete-project';
    
    li.textContent = list[i].title;
    btnDeleteProject.textContent = 'X';
    // create a unique id for each project using the date and time created with
    // everything but numbers removed. 
    btnDeleteProject.id = list[i].dateCreated.replace(/\D/g, '');
    li.id = list[i].dateCreated.replace(/\D/g, '');
    projectContainer.appendChild(li);
    projectContainer.appendChild(btnDeleteProject);
    projectList.appendChild(projectContainer);
    if (li.textContent === 'Default Project') {
      makeActiveProject(li)
    }
  }
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    // if project is clicked, make it active and render the display.
    project.addEventListener('click', projectClickedHandler)
  })
  
  const btnDeleteProjects = document.querySelectorAll('.btn-delete-project');
  btnDeleteProjects.forEach(btn => {
    btn.addEventListener('click', deleteProjectHandler)
  }); 
}


export function renderDisplay() {
  const display = document.querySelector('.display');
  const displayHeader = document.querySelector('.display-header');
  const taskHolder = document.createElement('ul');
  taskHolder.classList.add('task-holder');
  console.log(`Here`);
  let activeProject = list.find(project => project.active === true);
  if (!activeProject) {
    displayHeader.textContent = 'No active project';
    display.textContent = ` No tasks to display.`;
    return
  }
  console.log(`active project: ${activeProject.title}`);
  
  displayHeader.textContent = activeProject.title;
  
  // clear the display
  while(display.firstChild) {
    display.removeChild(display.firstChild);
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
    taskItem.textContent = `${task.title} due ${task.date}`; 
    taskHolder.appendChild(taskItem);
    taskHolder.appendChild(btnDeleteTask);
  });
  
  // Add the task holder to the display
  display.appendChild(taskHolder);

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
  const activeProject = document.querySelector('.active-project');
  if (activeProject) {
    activeProject.classList.remove('active-project');
  }
  project.active = true;
}