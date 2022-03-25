import homePage from "./home";

export default function initial() {
  const body = document.querySelector('body');

  body.appendChild(createHeader());
  body.appendChild(createCurrentPage());
  body.appendChild(createSidebar());
  body.appendChild(createFooter());

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
  const currentPage = homePage()

  return currentPage
}

function createSidebar() {
  const aside = document.createElement('aside');
  const sideList = document.createElement('ul');
  const btnAddTask = document.createElement('button');
  
  aside.classList.add('sidebar');
  sideList.classList.add('side-list');
  btnAddTask.classList.add('btn-add-task')

  btnAddTask.textContent = '+';
  
  const testX = document.createElement('li');
  testX.textContent = "test";

  aside.appendChild(testX);
  aside.appendChild(btnAddTask);

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