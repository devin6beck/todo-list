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
  const btnNewList = document.createElement('button');
  const inputNewList = document.createElement('input');
  const divNewList = document.createElement('div');
  
  aside.classList.add('sidebar');
  sideList.classList.add('side-list');
  btnNewList.classList.add('btn-new-list');
  inputNewList.classList.add('input-new-list');

  btnNewList.textContent = '+';
  
  // const testX = document.createElement('li');
  // testX.textContent = "test";

  // aside.appendChild(testX);
  divNewList.appendChild(btnNewList);
  divNewList.appendChild(inputNewList);
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