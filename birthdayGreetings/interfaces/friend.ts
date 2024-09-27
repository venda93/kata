import myBirthday from "../classes/MyBirthday";
import GreetChoice from "./GreetChoice";

export default interface Friend {
  name: string;
  greetChoice: GreetChoice;
  email: string;
  phoneNumber: string;
  myBirthday: myBirthday;
}
