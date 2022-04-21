export default function createTaskForm(task) {
  const body = document.querySelector('body');
  const article = document.createElement('article');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const notesTextAreaElement = document.createElement('textarea');
  const submitBtnElement = document.createElement('input');
  const h3 = document.createElement('h3');
  const br = document.createElement('br');
  const titleLabel = document.createElement('label');
  const notesLabel = document.createElement('label');

  article.classList.add('form-container');
  form.classList.add('form');
  titleInput.classList.add('task-title-input');
  dateInput.classList.add('task-date-input');
  notesTextAreaElement.classList.add('task-notes-input');

  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.classList.add('task-title');
  titleLabel.htmlFor = 'title';
  dateInput.type = 'date';
  dateInput.classList.add('due-date')
  notesTextAreaElement.rows = '4';
  notesTextAreaElement.name = 'notes';

  submitBtnElement.type = 'button';
  submitBtnElement.classList.add('submit-task');
  submitBtnElement.value = 'Submit';

  h3.textContent = 'New Task';
  titleLabel.textContent = 'Title'

  notesLabel.textContent = 'Notes'

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  form.appendChild(dateInput);
  form.appendChild(notesLabel);
  form.appendChild(notesTextAreaElement);
  form.appendChild(br);
  form.appendChild(submitBtnElement);
  article.appendChild(h3);
  article.appendChild(form);
  body.appendChild(article);

  if (task) {
    titleInput.value = task.title;
    dateInput.value = task.date;
    notesTextAreaElement.value = task.notes;
  }
}