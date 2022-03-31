import { format } from 'date-fns';
import Task from './task';

export default class Project {
  /* Create a new date with the format of "Sunday, April 29th, 1453" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPpp");
    this.title = title;
    this.taskList = [defaultTask()]; // can remove this line for final project
    this.id = this.dateCreated.replace(/\D/g, '');
    console.log(`Here is the id of project ${this.id}`);
  }
}

// can remove this code for final project
function defaultTask() {
  const task = new Task('Default Task');
  return task;
}
