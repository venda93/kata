import Clock from "../classes/Clock";
import myBirthday from "../classes/MyBirthday";
import Friend from "../interfaces/Friend";

const clock = new Clock(new Date());

const friends: Friend[] = [
  {
    name: "pippo",
    greetChoice: "sms",
    email: "pippo@email.it",
    phoneNumber: "1332332332",
    myBirthday: new myBirthday({ day: 1, month: 1, year: 1970 }, clock),
  },
  {
    name: "gino",
    greetChoice: "sms",
    email: "gino@email.it",
    phoneNumber: "2332332332",
    myBirthday: new myBirthday({ day: 29, month: 2, year: 1998 }, clock),
  },
  {
    name: "pluto",
    greetChoice: "email",
    email: "pluto@email.it",
    phoneNumber: "3332332332",
    myBirthday: new myBirthday({ day: 27, month: 9, year: 2020 }, clock),
  },
];
export default friends;
