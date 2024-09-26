"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var birthdayGreetings_1 = require("./classes/birthdayGreetings");
var messenger_1 = require("./classes/messenger");
var friends_1 = require("./repositories/friends");
var messenger = new messenger_1.default();
var app = new birthdayGreetings_1.default(messenger, friends_1.friends);
app.greet();
