import BirthdayGreetings from "./classes/birthdayGreetings";
import Messenger from "./classes/messenger";
import { friends } from "./repositories/friends";

const messenger = new Messenger();

const app = new BirthdayGreetings(messenger, friends);

app.greet();
