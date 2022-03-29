export default function renderDisplay(project) {
  const display = document.querySelector('.display');
  const displayHeader = document.querySelector('.display-header');
  display.textContent = project.title;
  displayHeader.textContent = project.title;
}
