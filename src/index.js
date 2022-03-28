import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import initial from './initial.js';
import newTask from './new-task';

initial();

window.onload = function() {
  const buttonAdd = document.querySelector('.btn-add-task');
  buttonAdd.addEventListener('click', addClickHandler);
  const testTask = new newTask(); // DELETE THIS. JUST USING FOR CSS
  function addClickHandler() {
    console.log('clicked button');
    const testTask = new newTask();
    console.log(`Test ${testTask.dateCreated}`);
  }
}

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