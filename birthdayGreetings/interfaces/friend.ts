import myBirthday from "../classes/myBirthday";
import GreetChoice from "./greetChoice";

export default interface Friend {
  name: string;
  greetChoice: GreetChoice;
  email: string;
  phoneNumber: string;
  myBirthday: myBirthday;
}
