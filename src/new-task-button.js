import { format } from 'date-fns'
import taskForm from './new-task-form';

export default class newTask {
  /* Create a new date with the format of "Sunday, April 29th, 1453" */
  constructor() {
    this.dateCreated = format(new Date(), "PPPP");
    taskForm()
  }
}

/* 
let today = new Date();
let testDate = format(today, "PPPP ") 
*/