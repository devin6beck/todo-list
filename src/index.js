import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import initial from './initial.js';
import newTask from './new-task';
import { newListClickHandler } from './list-logic';

initial();

const buttonAdd = document.querySelector('.btn-new-project');
buttonAdd.addEventListener('click', newListClickHandler);
const buttonTask = document.querySelector('.btn-task');
buttonTask.addEventListener('click', () => {
  const task = new newTask;
  console.log(`Test ${task.dateCreated}`);
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