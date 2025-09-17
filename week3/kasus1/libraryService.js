import { books } from "./books.js";

let nextId = books.length + 1;

export function getAllBooks() {
  return books;
}

export function addBook(book) {
  const newBook = { id: nextId++, ...book };
  books.push(newBook);
  return newBook;
}

export function findBookByTitle(title) {
  return books.find((book) => book.judul.toLowerCase() === title.toLowerCase());
}
