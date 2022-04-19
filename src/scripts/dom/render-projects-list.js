import { deleteProjectHandler, projectsArray, projectClickedHandler, loadProjectForm } from "../brain/handlers";


export function renderProjectList() {
  /* 
  This function clears the list of projects from the display
  and then creates a new list of projects from the projectsArray to display.
   */
  const projectList = document.querySelector('.project-list');
  while(projectList.firstChild){
    projectList.removeChild(projectList.firstChild);
  }
  createLiForEachProject(projectList);
}

function createLiForEachProject(projectList) {
  // loop through list of projects and create a new list item for each project
  for (let i = 0; i < projectsArray.length; i++) {
    // create elements for the project
    const projectContainerDivElement = document.createElement('div');
    const projectLiElement = document.createElement('li');
    const btnDeleteProjectElement = document.createElement('button');
    
    // add class names to the elements
    projectContainerDivElement.className = 'project-container';
    projectLiElement.className = 'project';
    btnDeleteProjectElement.className = 'btn-delete-project';
    
    // add project title to li text content and "X" to btnDeleteProject text content
    projectLiElement.textContent = projectsArray[i].title;
    btnDeleteProjectElement.textContent = 'X';

    // create a unique id for each project using the date and time created with
    // everything but numbers removed. 
    btnDeleteProjectElement.id = projectsArray[i].dateCreated.replace(/\D/g, '');
    projectLiElement.id = projectsArray[i].dateCreated.replace(/\D/g, '');

    projectContainerDivElement.appendChild(projectLiElement);
    projectContainerDivElement.appendChild(btnDeleteProjectElement);
    projectList.appendChild(projectContainerDivElement);

    // add event listeners to the project

    // if a project is clicked, make it active and render the display.
    projectLiElement.addEventListener('click', projectClickedHandler);
    // if a project is double clicked, make it active and display project form.
    projectLiElement.addEventListener('dblclick', loadProjectForm)
    btnDeleteProjectElement.addEventListener('click', deleteProjectHandler)
  }
}