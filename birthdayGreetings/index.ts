import BirthdayGreetings from "./classes/BirthdayGreetings";
import Messenger from "./classes/Messenger";
import friends from "./repositories/friends";

const messenger = new Messenger();

const app = new BirthdayGreetings(messenger, friends);

app.greet();
