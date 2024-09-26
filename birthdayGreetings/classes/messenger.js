"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailSender_1 = require("./emailSender");
var smsSender_1 = require("./smsSender");
var Messenger = /** @class */ (function () {
    function Messenger() {
    }
    Messenger.prototype.getSender = function (greetChoice) {
        switch (greetChoice) {
            case "sms":
                return smsSenderInstance;
            default:
                return emailSenderInstance;
        }
    };
    return Messenger;
}());
exports.default = Messenger;
var smsSenderInstance = new smsSender_1.default();
var emailSenderInstance = new emailSender_1.default();
