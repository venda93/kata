import Friend from "../interfaces/friend";
import Sender from "../interfaces/sender";

export default class emailSender implements Sender {
  sendTo(friend: Friend) {
    console.log("email sent to ", friend.name);
  }
}
