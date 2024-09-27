import Friend from "../interfaces/Friend";
import Sender from "../interfaces/Sender";

export default class EmailSender implements Sender {
  sendTo(friend: Friend) {
    console.log("email sent to ", friend.name);
  }
}
