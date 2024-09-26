import Friend from "../interfaces/friend";
import Sender from "../interfaces/sender";

export default class smsSender implements Sender {
  sendTo(friend: Friend) {
    console.log("sms sent to ", friend.name);
  }
}
