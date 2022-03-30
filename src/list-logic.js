import Project from './project.js';
import renderDisplay from './render-display.js';
import taskForm from './create-form';
import newTask from './new-task';

let list = [];

export function newListClickHandler() {
  const projectTitle = document.querySelector('.project-title');
  const newProject = new Project(projectTitle.value);
  if (projectTitle.value === null || projectTitle.value === '') {
    return;
  }
  list.push(newProject);
  renderList(newProject);
  projectTitle.value = null;
  // const testTask = new newTask();
  // console.log(`Test ${testTask.dateCreated}`);
}

function renderList(newProject) {
  const projectList = document.querySelector('.project-list');
  while( projectList.firstChild ){
    projectList.removeChild( projectList.firstChild );
  }
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.className = 'project';
    li.textContent = list[i].title;
    projectList.appendChild(li);
  }
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', (e) => {
      list.forEach(project => {
        if (project.title === e.target.textContent) {
          const activeProject = document.querySelector('active-project');
          if (activeProject) {
            activeProject.classList.remove('active-project');
          }
          e.target.classList.add('active-project');
          renderDisplay(project);
        }
      })
    }); 
  })

}

export function createTaskHandler() {
  taskForm();
  const taskTitle = document.querySelector('.task-title');
  const taskDueDate = document.querySelector('.due-date');
  const btnSubmit = document.querySelector('.submit-task');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const task = new newTask(taskTitle.value);
    const formContainer = document.querySelector('.form-container');
    const activeProject = document.querySelector('.active-project');
    task.date = taskDueDate.value;
    console.log(task);
    console.log(`active project: ${activeProject.textContent}`);
    list.forEach(project => {
      if (project.title === activeProject.textContent) {
        project.taskList.push(task);
        formContainer.remove();
        renderDisplay(project);
      }
    })
  })
}


export function defaultProject() {
  const defaultProject = new Project('Default Project');
  console.log(`Here is the default project ${defaultProject.title}`);
  list.push(defaultProject);
  renderList(defaultProject);
  return defaultProject;
}