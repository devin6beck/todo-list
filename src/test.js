export default function testPage() {
  const testPage = document.createElement('section');
  const displayHeader = document.createElement('h2');
  const display = document.createElement('div');

  testPage.classList.add('current-page');
  displayHeader.classList.add('display-header');
  display.classList.add('display');

  display.textContent = 'Test';
  displayHeader.textContent = 'Test display header';


  testPage.appendChild(displayHeader);
  testPage.appendChild(display);

  return testPage
}