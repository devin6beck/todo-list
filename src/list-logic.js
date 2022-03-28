
let list = ['test', 'test2', 'test3'];

export function newListClickHandler() {
  const inputNewList = document.querySelector('.input-new-list');
  const sideList = document.querySelector('.side-list');

  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.textContent = list[i];
    sideList.appendChild(li);
  }
  return console.log('clicked button');
  // const testTask = new newTask();
  // console.log(`Test ${testTask.dateCreated}`);
}