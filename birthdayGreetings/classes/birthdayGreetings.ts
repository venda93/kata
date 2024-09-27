import Friend from "../interfaces/Friend";
import Messenger from "./Messenger";
export default class BirthdayGreetings {
  constructor(
    private readonly messenger: Messenger,
    private readonly friends: Friend[]
  ) {}

  greet() {
    this.friends.forEach((friend) => {
      if (friend.myBirthday.isMyBirthday()) {
        this.messenger.getSender(friend.greetChoice).sendTo(friend);
      }
    });
  }
}
