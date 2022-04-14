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
  if (activeProject) {

    activeProject.active = false;
  }
  newProject.active = true;
  list.push(newProject);
  renderProjectList();
  renderDisplay();
  projectTitle.value = null;
}

// used when createTask button is clicked and when a task li is clicked.
export function taskCreateOrClickedHandler(e) {
  const activeProject = list.find(project => project.active === true);

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
    if (taskTitle.value === null || taskTitle.value === '' || 
      taskDueDate.value === null || taskDueDate.value === '') {
      alert('Please enter a title and due date');
      return;
    }
    const formContainer = document.querySelector('.form-container');

    let task;
    if (!taskClicked) {
      // if the Create Task button is clicked, create a new task
      task = new Task(taskTitle.value);
      task.date = taskDueDate.value;
      list.forEach(project => {
        if (project.active === true) {
          let doNotAdd = false
  
          project.taskList.forEach(task => {
            if (task.title === taskTitle.value && task.date === taskDueDate.value) {
              alert('Task with same title and due date already exists');
              doNotAdd = true;
              return;
            } 
          });
      
        
          if (!doNotAdd) {
          project.taskList.push(task);
          }
        }
      })
    } else {
      // If a task is clicked, open the form with the task's title and date
      task = taskClicked
      task.title = taskTitle.value;
      task.date = taskDueDate.value;
    }
    formContainer.remove();
    renderDisplay();
  })

}

export function projectClickedHandler(e) {
  const project = list.find(project => project.title === e.target.textContent);
  const activeProject = list.find(project => project.active === true);
  activeProject.active = false;
  makeActiveProject(project);
  renderDisplay();
}

// export function taskClickedHandler(e) {
//   console.log(`Create a function that brings up the task form when a task is clicked.`);
//   const activeProject = list.find(project => project.active === true);
//   const task = activeProject.taskList.find(task => task.id === e.target.dataset.taskId);
//   taskForm(task);
//   renderDisplay();
// }

export function deleteProjectHandler(e) {
  const activeProject = list.find(project => project.id === e.target.id);
  list.splice(list.indexOf(activeProject), 1);
  if (list[0]) {
    list[0].active = true;
  }
  renderProjectList();
  renderDisplay();
}


export function deleteTaskHandler(e) {
  const activeProject = list.find(project => project.active === true);
  const taskToDelete = activeProject.taskList.find(task => task.id === e.target.id);
  activeProject.taskList.splice(activeProject.taskList.indexOf(taskToDelete), 1);
  renderDisplay();
}
