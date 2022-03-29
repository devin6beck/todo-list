export default function renderDisplay(project) {
  const display = document.querySelector('.display');
  const displayHeader = document.querySelector('.display-header');
  display.textContent = project.title;
  displayHeader.textContent = project.title;
  display.appendChild(createTaskBtn());
}

function createTaskBtn() {
  const taskBtn = document.createElement('button');
  taskBtn.classList.add('btn-task');
  taskBtn.textContent = '+';
  return taskBtn;
}
