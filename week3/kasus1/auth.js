// auth.js

import { users } from "./user.js";

let nextId = users.length + 1;

export function login(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  return user
    ? `Login berhasil: ${user.username}`
    : "Login gagal: username atau password salah";
}

export function register(username, password) {
  const existing = users.find((u) => u.username === username);
  if (existing) {
    return "Registrasi gagal: username sudah digunakan";
  }

  const newUser = { id: nextId++, username, password };
  users.push(newUser);
  return `Registrasi berhasil: ${newUser.username}`;
}
