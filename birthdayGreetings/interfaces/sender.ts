import Friend from "./Friend";

export default interface Sender {
  sendTo(friend: Friend): void;
}
