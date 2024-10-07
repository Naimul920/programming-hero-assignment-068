import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold">Books</h1>
      <div className="grid grid-cols-3 py-5">
      {
        books.map((book)=><Book key={book.bookId} book={book} ></Book>)
      }
      </div>
    </div>
  );
}
