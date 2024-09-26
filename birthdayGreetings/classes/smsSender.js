"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smsSender = /** @class */ (function () {
    function smsSender() {
    }
    smsSender.prototype.sendTo = function (friend) {
        console.log("sms sent to ", friend.name);
    };
    return smsSender;
}());
exports.default = smsSender;
