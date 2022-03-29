import Project from './project.js';
import renderDisplay from './render-display.js';

let list = [];

export function newListClickHandler() {
  const projectTitle = document.querySelector('.project-title');
  const newProject = new Project(projectTitle.value);
  if (projectTitle.value === null || projectTitle.value === '') {
    return;
  }
  list.push(newProject);
  renderList(newProject);
  projectTitle.value = null;
  // const testTask = new newTask();
  // console.log(`Test ${testTask.dateCreated}`);
}

function renderList(newProject) {
  const projectList = document.querySelector('.project-list');
  while( projectList.firstChild ){
    projectList.removeChild( projectList.firstChild );
  }
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.className = 'project';
    li.textContent = list[i].title;
    projectList.appendChild(li);
    li.addEventListener('click', () => {
      console.log(`You clicked a project`);
      renderDisplay(newProject);
    });
  }
}