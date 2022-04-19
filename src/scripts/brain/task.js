import { format } from 'date-fns'

export default class Task {
  /* Create a new date with the format of "'Sunday', April 29th, 1453" */
  constructor(title) {
    this.dateCreated = format(new Date(), "PPpp");
    this.title = title;
    this.date;
    this.id = this.dateCreated.replace(/\D/g, '');
  }
}
