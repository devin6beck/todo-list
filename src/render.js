import { deleteProjectHandler, list, projectClickedHandler } from "./handlers";


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
  let activeProject = list.find(project => project.active === true);
  console.log(`Here is the active project: ${activeProject.title}`);
  
  taskHolder.classList.add('task-holder');
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
      activeProject.taskList.forEach(task => {
        if (task.id === e.target.id) {
          activeProject.taskList.splice(activeProject.taskList.indexOf(task), 1);
          renderDisplay();
        }
      })
    });
  });
}


export function makeActiveProject(project) {
  const activeProject = document.querySelector('.active-project');
  if (activeProject) {
    activeProject.classList.remove('active-project');
  }
  project.active = true;
}