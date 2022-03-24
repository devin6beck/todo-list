import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import initial from './initial.js';

initial();

window.onload = function() {
  const buttonAdd = document.querySelector('.btn-add-task');
  buttonAdd.addEventListener('click', addClickHandler);

  function addClickHandler() {
    console.log('clicked button');
  }
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