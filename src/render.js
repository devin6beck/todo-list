import { list } from "./logic";

export function renderDisplay(project) {
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
      li.classList.add('active-project');
    }
  }
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', (e) => {
      list.forEach(project => {
        if (project.title === e.target.textContent) {
          const activeProject = document.querySelector('.active-project');
          if (activeProject) {
            activeProject.classList.remove('active-project');
          }
          e.target.classList.add('active-project');
          renderDisplay(project);
        }
      })
    }); 
  })

  const btnDeleteProjects = document.querySelectorAll('.btn-delete-project');
  btnDeleteProjects.forEach(btn => {
    btn.addEventListener('click', (e) => {
      list.forEach(project => {
        if (project.id === e.target.id) {
          list.splice(list.indexOf(project), 1);
          renderProjectList();
          // When a project is delete the display shows the first project in list
          renderDisplay(list[0]);
        }
      })

    });
  });

}

