import { users } from "./user.js";

export function getAllUser() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}
