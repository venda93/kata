"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock_1 = require("../classes/clock");
var myBirthday_1 = require("../classes/myBirthday");
var clock = new clock_1.default(new Date());
var friends = [
    {
        name: "pippo",
        greetChoice: "sms",
        email: "pippo@email.it",
        phoneNumber: "1332332332",
        myBirthday: new myBirthday_1.default({ day: 1, month: 1, year: 1970 }, clock),
    },
    {
        name: "gino",
        greetChoice: "sms",
        email: "gino@email.it",
        phoneNumber: "2332332332",
        myBirthday: new myBirthday_1.default({ day: 29, month: 2, year: 1998 }, clock),
    },
    {
        name: "pluto",
        greetChoice: "email",
        email: "pluto@email.it",
        phoneNumber: "3332332332",
        myBirthday: new myBirthday_1.default({ day: 26, month: 9, year: 2020 }, clock),
    },
];
exports.default = friends;
