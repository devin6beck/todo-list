import Project from './project.js';
import {renderDisplay, renderProjectList, makeActiveProject} from './render.js';
import taskForm from './task-form';
import Task from './task';

export let list = [];


export function createProjectHandler() {
  const projectTitle = document.querySelector('.project-title');
  const newProject = new Project(projectTitle.value);
  if (projectTitle.value === null || projectTitle.value === '') {
    return;
  }
  let activeProject = list.find(project => project.active === true);
  activeProject.active = false;
  newProject.active = true;
  list.push(newProject);
  renderProjectList();
  renderDisplay();
  projectTitle.value = null;
}


export function createTaskHandler() {
  taskForm();
  const taskTitle = document.querySelector('.task-title');
  const taskDueDate = document.querySelector('.due-date');
  const btnSubmit = document.querySelector('.submit-task');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskTitle.value === null || taskTitle.value === '' || 
      taskDueDate.value === null || taskDueDate.value === '') {
      alert('Please enter a title and due date');
      return;
    }
    const task = new Task(taskTitle.value);
    const formContainer = document.querySelector('.form-container');
    const activeProject = document.querySelector('.active-project');
    task.date = taskDueDate.value;
    list.forEach(project => {
      if (project.active === true) {
        project.taskList.push(task);
        formContainer.remove();
        renderDisplay();
      }
    })
  })
}

