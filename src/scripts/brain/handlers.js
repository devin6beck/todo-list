import Project from './project.js';
import projectForm from '../dom/render-project-form.js';
import { renderActiveProject } from "../dom/render-active-project.js";
import { renderProjectList } from '../dom/render-projects-list.js';
import createTaskForm from '../dom/render-task-form';
import Task from './task';

const LOCAL_STORAGE_LIST_KEY = 'project.lists';
export let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [defaultProject()];

export function loadProjectForm(e) {
  const projectClicked = projectsArray.find(project => project.title === e.target.textContent);
  buttonsDisabled()
  projectForm(projectClicked);
  projectFormSubmitHandler(projectClicked)
}

export function deleteProjectHandler(e) {
  const projectToDelete = projectsArray.find(project => project.id === e.target.id);
  projectsArray.splice(projectsArray.indexOf(projectToDelete), 1);
  saveAndRender();
}

export function projectClickedHandler(e) {
  const project = projectsArray.find(project => project.title === e.target.textContent);
  assignActiveProject(project);
  saveAndRender();
}

export function loadTaskForm(e) {
  // If a task was clicked, populate the form with the task's title and date.
  // If the Create Task button was clicked, populate the form with an empty title and date.

  buttonsDisabled()
  if (!getActiveProject()) {
    alert('No active project');
    buttonsEnabled();
    return;
  }
  const taskClicked = getActiveProject().taskList.find(task => task.id === e.target.dataset.taskId);
  createTaskForm(taskClicked);
  taskFormSubmitHandler(taskClicked) 
}

export function deleteTaskHandler(e) {
  const activeProject = projectsArray.find(project => project.active === true);
  const taskToDelete = activeProject.taskList.find(task => task.id === e.target.id);
  activeProject.taskList.splice(activeProject.taskList.indexOf(taskToDelete), 1);
  saveAndRender();
}

export function displayHeaderEventHandler(e) {
  const activeProject = projectsArray.find(project => project.active === true);
  const displayHeader = document.querySelector('.display-header');
  activeProject.title = displayHeader.textContent;
  saveAndRender();
}

function buttonsDisabled() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function buttonsEnabled() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.removeAttribute('disabled');
  });
}

function saveAndRender() {
  save();
  renderProjectList();
  renderActiveProject();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectsArray));
}

function defaultProject() {
  const project = new Project('Default Project');
  project.active = true;
  return project;
}

export function getActiveProject() {
  const activeProject = projectsArray.find(project => project.active === true);
  // if (!activeProject) {
  //   return null;
  // }
  return activeProject;
}



function removeFormContainer() {
  const formContainer = document.querySelector('.form-container');
  formContainer.remove();
}

function removeProjectFormContainer() {
  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.remove();
}

function assignTaskDueDate(task, taskDueDate) {
  if (taskDueDate.value === null || taskDueDate.value === '') {
    task.date = '';
  } else {
    task.date = taskDueDate.value;
  }
}

function addTaskToProject(project, task, taskTitleInputElement, taskDueDateInputElement) {
  if (project.taskList.find(task => task.title === taskTitleInputElement.value && 
    task.date === taskDueDateInputElement.value)) {
      alert('Task already exists with same title and due date.');
    } else {
      project.taskList.push(task);
    }
}

export function assignActiveProject(project) {
  getActiveProject() === undefined ? '' : getActiveProject().active = false; 
  project.active = true;
}

function taskFormSubmitHandler(taskClicked) {
  const btnSubmitElement = document.querySelector('.submit-task');
  const taskTitleInputElement = document.querySelector('.task-title');
  const taskDueDateInputElement = document.querySelector('.due-date');
  
  btnSubmitElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskTitleInputElement.value === null || taskTitleInputElement.value === ''){
      alert('Please enter a title for the task');
      return;
    }
    
    if (taskClicked) {
      // Edit the task's title and date to new input values.
      taskClicked.title = taskTitleInputElement.value;
      taskClicked.date = taskDueDateInputElement.value;
    } else {
      // Create a new task with the title and date input.
      const task = new Task(taskTitleInputElement.value);
      assignTaskDueDate(task, taskDueDateInputElement);
      
      const project = projectsArray.find(project => project.active === true);
      addTaskToProject(project, task, taskTitleInputElement, taskDueDateInputElement);
    }
    removeFormContainer()
    saveAndRender();
    buttonsEnabled();
  })
  
}

function projectFormSubmitHandler(projectClicked) {
  const btnSubmit = document.querySelector('.submit-project');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let project = projectClicked;
    const title = document.querySelector('.project-title').value;
    if (title === '' || title === null) {
      alert('Please enter a title for your project');
      return
    }
    if (projectClicked) {
      project.title = title;
    } else {
      if (projectsArray.find(project => project.title === title)) {
        alert('Project already exists');
        return
      } 
      project = new Project(title);
      projectsArray.push(project);

    }
    assignActiveProject(project);
    saveAndRender();
    buttonsEnabled();
    removeFormContainer()
  });
}



// function addClickListenerToEditTaskSubmitBtn(taskClicked) {
//   const btnSubmitElement = document.querySelector('.submit-task');
//   const taskTitleInputElement = document.querySelector('.task-title');
//   const taskDueDateInputElement = document.querySelector('.due-date');

//   btnSubmitElement.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (taskTitleInputElement.value === null || taskTitleInputElement.value === ''){
//       alert('Please enter a title for the task');
//       return;
//     }
//     const formContainer = document.querySelector('.form-container');

//     // Edit the task's title and date to new input values.
//     taskClicked.title = taskTitleInputElement.value;
//     taskClicked.date = taskDueDateInputElement.value;

//     formContainer.remove();
//     saveAndRender();
//     buttonsEnabled();
//   })
// }

// export function createProjectHandler() {
//   buttonsDisabled()
//   projectForm();
//   const btnSubmit = document.querySelector('.submit-project');
//   btnSubmit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const title = document.querySelector('.project-title').value;
//     if (title === '' || title === null) {
//       alert('Please enter a title for your project');
//       return
//     }
//     if (projectsArray.find(project => project.title === title)) {
//       alert('Project already exists');
//       return
//     } 
//     const project = new Project(title);
//     projectsArray.push(project);
//     makeProjectActive(project);
//     saveAndRender();
//     buttonsEnabled();
//     const article = document.querySelector('article');
//     article.remove();
//   });
// }

// export function projectDoubleClickedHandler(e) {
//   const project = projectsArray.find(project => project.title === e.target.textContent);
//   projectForm(project);
//   buttonsDisabled()
//   const btnSubmit = document.querySelector('.submit-project');
//   btnSubmit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const title = document.querySelector('.project-title').value;
//     if (title === '' || title === null) {
//       alert('Please enter a title for your project');
//       return
//       }

//     project.title = title;
//     makeProjectActive(project);

//     saveAndRender();
//     buttonsEnabled();
//     removeFormContainer()
//   });
// }