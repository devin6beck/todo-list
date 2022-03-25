export default function taskForm() {
  const body = document.querySelector('body');
  const article = document.createElement('article');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const dateInput = document.createElement('input');
  const submit = document.createElement('input');
  const h3 = document.createElement('h3');
  const br = document.createElement('br');

  article.classList.add('task-form');
  form.classList.add('form');
  
  input.type = 'text';
  dateInput.type = 'date';
  submit.type = 'submit';

  h3.textContent = 'New Task';

  form.appendChild(input);
  form.appendChild(dateInput);
  form.appendChild(br);
  form.appendChild(submit);
  article.appendChild(h3);
  article.appendChild(form);
  body.appendChild(article);
}