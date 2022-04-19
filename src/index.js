import _ from 'lodash';
import './styles/style.css';
import initial from './scripts/dom/initial.js';
import {loadProjectForm, loadTaskForm } from './scripts/brain/handlers';

initial();

const buttonCreateProject = document.querySelector('.btn-new-project');
buttonCreateProject.addEventListener('click', loadProjectForm);
const buttonCreateTask = document.querySelector('.btn-task');
buttonCreateTask.addEventListener('click', loadTaskForm);
