import Friend from "../interfaces/Friend";
import Sender from "../interfaces/Sender";

export default class SmsSender implements Sender {
  sendTo(friend: Friend) {
    console.log("sms sent to ", friend.name);
  }
}
