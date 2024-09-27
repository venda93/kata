import GreetChoice from "../interfaces/GreetChoice";
import Sender from "../interfaces/Sender";
import EmailSender from "./EmailSender";
import SmsSender from "./SmsSender";

export default class Messenger {
  getSender(greetChoice: GreetChoice): Sender {
    switch (greetChoice) {
      case "sms":
        return smsSenderInstance;
      default:
        return emailSenderInstance;
    }
  }
}
const smsSenderInstance = new SmsSender();
const emailSenderInstance = new EmailSender();
