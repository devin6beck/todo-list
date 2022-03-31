export default function taskForm() {
  const body = document.querySelector('body');
  const article = document.createElement('article');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const submit = document.createElement('input');
  const h3 = document.createElement('h3');
  const br = document.createElement('br');
  const titleLabel = document.createElement('label');

  article.classList.add('form-container');
  form.classList.add('form');
  
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.classList.add('task-title');
  titleLabel.htmlFor = 'title'
  dateInput.type = 'date';
  dateInput.classList.add('due-date')
  submit.type = 'submit';
  submit.classList.add('submit-task');

  h3.textContent = 'New Task';
  titleLabel.textContent = 'Title'

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  form.appendChild(dateInput);
  form.appendChild(br);
  form.appendChild(submit);
  article.appendChild(h3);
  article.appendChild(form);
  body.appendChild(article);
}