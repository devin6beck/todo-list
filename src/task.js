import { format } from 'date-fns'
import taskForm from './task-form';

export default class Task {
  /* Create a new date with the format of "Sunday, April 29th, 1453" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPPP");
    this.title = title;
    this.date;
    // taskForm()
  }
}

/* 
let today = new Date();
let testDate = format(today, "PPPP ") 
*/