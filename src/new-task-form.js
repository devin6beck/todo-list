export default function taskForm() {
  const body = document.querySelector('body');
  const article = document.createElement('article');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const h3 = document.createElement('h3');

  article.classList.add('task-form');
  
  input.type = 'text';

  h3.textContent = 'New Task';

  form.appendChild(input);
  article.appendChild(h3);
  article.appendChild(form);
  body.appendChild(article);
}