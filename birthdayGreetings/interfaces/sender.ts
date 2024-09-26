import Friend from "./friend";

export default interface Sender {
  sendTo(friend: Friend): void;
}
