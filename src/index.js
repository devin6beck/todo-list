import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import initial from './initial.js';
import newTask from './new-task';
import { newListClickHandler } from './list-logic';
import taskForm from './create-form';

initial();

const buttonAdd = document.querySelector('.btn-new-project');
buttonAdd.addEventListener('click', newListClickHandler);
const buttonTask = document.querySelector('.btn-task');
buttonTask.addEventListener('click', () => {
  taskForm();
  const taskTitle = document.querySelector('.task-title');
  const taskDueDate = document.querySelector('.due-date');
  const btnSubmit = document.querySelector('.submit-task');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const task = new newTask(taskTitle.value);
    task.date = taskDueDate.value;
    console.log(task);
    
  })
});
// test



//test

function renderPage(newPage) {
  const body = document.querySelector('body');
  const previousPage = document.querySelector('.current-page');
  previousPage.remove();

  body.appendChild(newPage);

}

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());