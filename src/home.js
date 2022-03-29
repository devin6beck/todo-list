export default function homePage() {
  const homePage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const display = document.createElement('div');

  homePage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  display.classList.add('display');


  display.textContent = 'Home';
  displayHeader.textContent = 'Home display header';


  homePage.appendChild(displayHeader);
  homePage.appendChild(display);

  return homePage
}