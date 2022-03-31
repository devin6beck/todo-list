import _ from 'lodash';
import './style.css';
import initial from './initial.js';
import { createProjectHandler, createTaskHandler } from './list-logic';

initial();

const buttonCreateProject = document.querySelector('.btn-new-project');
buttonCreateProject.addEventListener('click', createProjectHandler);
const buttonCreateTask = document.querySelector('.btn-task');
buttonCreateTask.addEventListener('click', createTaskHandler);
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