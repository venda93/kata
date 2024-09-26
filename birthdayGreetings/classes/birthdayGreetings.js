"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BirthdayGreetings = /** @class */ (function () {
    function BirthdayGreetings(messenger, friends) {
        this.messenger = messenger;
        this.friends = friends;
    }
    BirthdayGreetings.prototype.greet = function () {
        var _this = this;
        this.friends.forEach(function (friend) {
            if (friend.myBirthday.isMyBirthday()) {
                _this.messenger.getSender(friend.greetChoice).sendTo(friend);
            }
        });
    };
    return BirthdayGreetings;
}());
exports.default = BirthdayGreetings;
