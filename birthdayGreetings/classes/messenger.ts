import GreetChoice from "../interfaces/greetChoice";
import Sender from "../interfaces/sender";
import emailSender from "./emailSender";
import smsSender from "./smsSender";

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
const smsSenderInstance = new smsSender();
const emailSenderInstance = new emailSender();
