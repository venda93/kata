export default class Clock {
  constructor(private readonly date: Date) {}
  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  year = this.date.getFullYear();
}
