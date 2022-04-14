export default function projectForm() {
  const body = document.querySelector('body');
  const article = document.createElement('article');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const submit = document.createElement('input');
  const h3 = document.createElement('h3');
  const br = document.createElement('br');
  const titleLabel = document.createElement('label');

  article.classList.add('form-container');
  form.classList.add('form');

  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.classList.add('project-title');
  titleLabel.htmlFor = 'title'
  submit.type = 'submit';
  submit.classList.add('submit-project');

  h3.textContent = 'New Project';
  titleLabel.textContent = 'Title'

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  form.appendChild(br);
  form.appendChild(submit);
  article.appendChild(h3);
  article.appendChild(form);
  body.appendChild(article);
}