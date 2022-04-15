import _ from 'lodash';
import './style.css';
import initial from './initial.js';
import { createProjectHandler, taskCreateOrClickedHandler } from './handlers';

initial();

const buttonCreateProject = document.querySelector('.btn-new-project');
buttonCreateProject.addEventListener('click', createProjectHandler);
const buttonCreateTask = document.querySelector('.btn-task');
buttonCreateTask.addEventListener('click', taskCreateOrClickedHandler);
