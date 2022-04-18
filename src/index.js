import _ from 'lodash';
import './style.css';
import initial from './initial.js';
import {loadProjectForm, loadTaskForm } from './handlers';

initial();

const buttonCreateProject = document.querySelector('.btn-new-project');
buttonCreateProject.addEventListener('click', loadProjectForm);
const buttonCreateTask = document.querySelector('.btn-task');
buttonCreateTask.addEventListener('click', loadTaskForm);
