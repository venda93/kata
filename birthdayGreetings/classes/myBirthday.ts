import DateObj from "../interfaces/dateObj";
import Clock from "./clock";

export default class myBirthday {
  constructor(
    private readonly birthdayDate: DateObj,
    private readonly clock: Clock
  ) {}
  isMyBirthday() {
    let { day, month, year } = this.birthdayDate;
    if (this.isLeapYear(year)) {
      if (day === 29 && month === 2) {
        day = 28;
      }
    }
    if (day !== this.clock.day) {
      return false;
    }
    return month === this.clock.month;
  }
  private isLeapYear(year: number) {
    return year % 4 === 0;
  }
}
