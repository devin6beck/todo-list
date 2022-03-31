import { format } from 'date-fns'

export default class Task {
  /* Create a new date with the format of "Sunday, April 29th, 1453" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPpp");
    console.log(`Here is the date ${this.dateCreated}`);
    this.title = title;
    this.date;
    // taskForm()
  }
}
