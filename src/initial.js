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
  const currentPage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const display = document.createElement('div');

  currentPage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  display.classList.add('display');

  display.textContent = 'display';
  displayHeader.textContent = 'display header';


  currentPage.appendChild(displayHeader);
  currentPage.appendChild(display);

  return currentPage
}

function createSidebar() {
  const aside = document.createElement('aside');
  const btnAddTask = document.createElement('button');

  aside.classList.add('sidebar');
  btnAddTask.classList.add('btn-add-task')

  btnAddTask.textContent = 'add';

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