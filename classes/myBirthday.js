"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myBirthday = /** @class */ (function () {
    function myBirthday(birthdayDate, clock) {
        this.birthdayDate = birthdayDate;
        this.clock = clock;
    }
    myBirthday.prototype.isMyBirthday = function () {
        var _a = this.birthdayDate, day = _a.day, month = _a.month, year = _a.year;
        if (this.isLeapYear(year)) {
            if (day === 29 && month === 2) {
                day = 28;
            }
        }
        if (day !== this.clock.day) {
            return false;
        }
        return month === this.clock.month;
    };
    myBirthday.prototype.isLeapYear = function (year) {
        return year % 4 === 0;
    };
    return myBirthday;
}());
exports.default = myBirthday;
