import { renderActiveProject } from "./render-active-project.js";
import { renderProjectList } from './render-projects-list.js';
import Project from '../brain/project.js';
import { projectsArray, displayHeaderEventHandler } from "../brain/handlers";

export default function initial() {
  const body = document.querySelector('body');

  body.appendChild(createHeader());
  body.appendChild(createSidebar());
  body.appendChild(createCurrentProjectPage());
  
  body.appendChild(createFooter());

  // defaultProject()
  renderProjectList();
  renderActiveProject();

}

function createHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');

  header.classList.add('header');

  h1.textContent = 'ToDo List';
  header.appendChild(h1);

  return header;
}

function createCurrentProjectPage() {
  
  const defaultPage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const activeProjectDisplayDivElement = document.createElement('div');
  const optionsContainer = document.createElement('div');
  const taskBtn = document.createElement('button');

  defaultPage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  activeProjectDisplayDivElement.classList.add('display');
  optionsContainer.classList.add('options-container');
  taskBtn.classList.add('btn-task');

  taskBtn.textContent = 'Create Task';

  displayHeader.contentEditable = true;

  ['blur', 'keypress'].forEach(event => {
    displayHeader.addEventListener(event, function(e) {
      if (event === 'keypress' && e.key !== 'Enter') {
        return
      }
      e.preventDefault()
      displayHeaderEventHandler(e);
    });
  });

  optionsContainer.appendChild(taskBtn);
  defaultPage.appendChild(displayHeader);
  defaultPage.appendChild(activeProjectDisplayDivElement);
  defaultPage.appendChild(optionsContainer);

  return defaultPage
}

function createSidebar() {
  const aside = document.createElement('aside');
  const sideList = document.createElement('ul');
  const btnNewList = document.createElement('button');
  const divNewList = document.createElement('div');
  
  aside.classList.add('sidebar');
  sideList.classList.add('project-list');
  btnNewList.classList.add('btn-new-project');

  btnNewList.textContent = '+';
  aside.appendChild(sideList)
  aside.appendChild(btnNewList);
  

  return aside
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const span = document.createElement('span');
  span.textContent = 'Made by ';

  const github = document.createElement('a');
  github.href = 'https://github.com/devin6beck';
  github.textContent = 'Devin Beck';

  span.appendChild(github);
  footer.appendChild(span);

  return footer;
}