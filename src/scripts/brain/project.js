import { format } from 'date-fns';
import Task from './task';

export default class Project {
  /* Create a new date with the format of "Apr 13, 2022, 11:10:45 PM" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPpp");
    console.log(`Here is the date created: ${this.dateCreated}`);
    this.title = title;
    this.taskList = [];
    // this.id is equal to this.dateCreated with only the numbers included
    // ex: Apr 13, 2022, 11:10:45 PM => 132022111045
    this.id = this.dateCreated.replace(/\D/g, '');
    this.active = false;
  }
}

// can remove this code for final project
function defaultTask() {
  const task = new Task('Default Task');
  task.date = format(new Date(), "PPpp");
  return task;
}
