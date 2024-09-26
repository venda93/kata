import Friend from "../interfaces/friend";
import Messenger from "./messenger";
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
