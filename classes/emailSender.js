"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailSender = /** @class */ (function () {
    function emailSender() {
    }
    emailSender.prototype.sendTo = function (friend) {
        console.log("email sent to ", friend.name);
    };
    return emailSender;
}());
exports.default = emailSender;
