"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = /** @class */ (function () {
    function Clock(date) {
        this.date = date;
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
    }
    return Clock;
}());
exports.default = Clock;
