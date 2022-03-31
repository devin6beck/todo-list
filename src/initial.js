import { defaultProject } from "./logic";
import renderDisplay from "./render-display";

export default function initial() {
  const body = document.querySelector('body');

  body.appendChild(createHeader());
  body.appendChild(createSidebar());
  body.appendChild(createCurrentPage());
  
  body.appendChild(createFooter());

  const firstProject = defaultProject();
  
  renderDisplay(firstProject);

}

function createHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');

  header.classList.add('header');

  h1.textContent = 'ToDo List';
  header.appendChild(h1);

  return header;
}

function createCurrentPage() {
  
  const defaultPage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const display = document.createElement('div');
  const optionsContainer = document.createElement('div');
  const taskBtn = document.createElement('button');

  defaultPage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  display.classList.add('display');
  optionsContainer.classList.add('options-container');
  taskBtn.classList.add('btn-task');

  taskBtn.textContent = 'Create Task';

  optionsContainer.appendChild(taskBtn);
  defaultPage.appendChild(displayHeader);
  defaultPage.appendChild(display);
  defaultPage.appendChild(optionsContainer);

  return defaultPage
}

function createSidebar() {
  const aside = document.createElement('aside');
  const sideList = document.createElement('ul');
  const btnNewList = document.createElement('button');
  const inputNewList = document.createElement('input');
  const divNewList = document.createElement('div');
  
  aside.classList.add('sidebar');
  sideList.classList.add('project-list');
  btnNewList.classList.add('btn-new-project');
  inputNewList.classList.add('project-title');
  divNewList.classList.add('new-project-input-container');

  btnNewList.textContent = '+';
  
  // const testX = document.createElement('li');
  // testX.textContent = "test";

  // aside.appendChild(testX);
  divNewList.appendChild(inputNewList);
  divNewList.appendChild(btnNewList);
  aside.appendChild(sideList)
  aside.appendChild(divNewList);
  

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