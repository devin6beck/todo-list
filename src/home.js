export default function homePage() {
  const homePage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const display = document.createElement('div');
  const optionsContainer = document.createElement('div');
  const taskBtn = document.createElement('button');

  homePage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  display.classList.add('display');
  optionsContainer.classList.add('options-container');
  taskBtn.classList.add('btn-task');

  
  
  display.textContent = 'Home';
  displayHeader.textContent = 'Home display header';
  taskBtn.textContent = 'Create Task';

  optionsContainer.appendChild(taskBtn);
  homePage.appendChild(displayHeader);
  homePage.appendChild(display);
  homePage.appendChild(optionsContainer);

  return homePage
}