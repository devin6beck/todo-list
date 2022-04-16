import Project from './project.js';
import projectForm from './project-form.js';
import {renderActiveProject, renderProjectList, makeProjectActive, disableCurrentActiveProject} from './render.js';
import taskForm from './task-form';
import Task from './task';

const LOCAL_STORAGE_LIST_KEY = 'project.lists';
export let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [defaultProject()];


export function createProjectHandler() {
  buttonsDisabled()
  projectForm();
  const btnSubmit = document.querySelector('.submit-project');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.project-title').value;
    if (title === '' || title === null) {
      alert('Please enter a title for your project');
      return
      }
    if (projectsArray.find(project => project.title === title)) {
      alert('Project already exists');
      return
    } 
    const project = new Project(title);
    projectsArray.push(project);
    makeProjectActive(project);
    saveAndRender();
    buttonsEnabled();
    const article = document.querySelector('article');
    article.remove();
  });
}

// used when createTask button is clicked and when a task li is clicked.
export function taskCreateOrClickedHandler(e) {
  buttonsDisabled()
  const activeProject = projectsArray.find(project => project.active === true);

  if (!activeProject) {
    alert('No active project');
    return;
  }

  const taskClicked = activeProject.taskList.find(task => task.id === e.target.dataset.taskId);
  // creates a form that displayed the title and date of the task clicked or 
  // if the create Task button is clicked is creates a blank form.
  taskForm(taskClicked);
  const taskTitle = document.querySelector('.task-title');
  const taskDueDate = document.querySelector('.due-date');
  const btnSubmit = document.querySelector('.submit-task');


  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskTitle.value === null || taskTitle.value === ''){
      alert('Please enter a title for the task');
      return;
    }
    const formContainer = document.querySelector('.form-container');

    let task;
    if (!taskClicked) {
      // if the Create Task button is clicked, create a new task
      task = new Task(taskTitle.value);
      if (taskDueDate.value === null || taskDueDate.value === '') {
        task.date = '';
      } else {
        task.date = taskDueDate.value;
      }

      const project = projectsArray.find(project => project.active === true);

      if (project.taskList.find(task => task.title === taskTitle.value || task.date === taskDueDate.value)) {
        alert('Task already exists with same title and due date.');
      } else {
        project.taskList.push(task);
      }
      
    } else {
      // If a task is clicked, open the form with the task's title and date
      task = taskClicked
      task.title = taskTitle.value;
      task.date = taskDueDate.value;
    }
    formContainer.remove();
    saveAndRender();
    buttonsEnabled();
  })
}

export function projectDoubleClickedHandler(e) {
  const project = projectsArray.find(project => project.title === e.target.textContent);
  projectForm(project);
  buttonsDisabled()
  const btnSubmit = document.querySelector('.submit-project');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.project-title').value;
    if (title === '' || title === null) {
      alert('Please enter a title for your project');
      return
      }
    // if (list.find(project => project.title === title)) {
    //   alert('Project already exists');
    //   return
    // } 
    // const project = new Project(title);
    // list.push(project);
    project.title = title;
    makeProjectActive(project);

    saveAndRender();
    buttonsEnabled();
    const article = document.querySelector('article');
    article.remove();
  });
}

export function projectClickedHandler(e) {
  const project = projectsArray.find(project => project.title === e.target.textContent);
  makeProjectActive(project);
  saveAndRender();
}

export function deleteProjectHandler(e) {
  const projectToDelete = projectsArray.find(project => project.id === e.target.id);
  const activeProject = projectsArray.find(project => project.active === true);
  projectsArray.splice(projectsArray.indexOf(projectToDelete), 1);
  // if the project to delete is the active project, make the first project in the list active
  if (activeProject === projectToDelete) {
    if (projectsArray[0]) {
      projectsArray[0].active = true;
    }
  }
  saveAndRender();
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