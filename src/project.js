import { format } from 'date-fns'

export default class Project {
  /* Create a new date with the format of "Sunday, April 29th, 1453" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPPP");
    this.title = title;
    this.taskList = [];
  }
}
