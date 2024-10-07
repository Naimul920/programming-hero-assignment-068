import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { getStoredBook, getWishlistBook } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";

export default function ListedBooks() {
  const [activeTab, setActiveTab] = useState("Read Books");
  const [allReadBooks, setAllReadBooks] = useState([]);
  const [allWishlistBooks, setAllWishlistBooks] = useState([]);
  const books = useLoaderData();
  const [language, setLanguage] = useState("0"); 
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    
  };

  useEffect(() => {
    const readBookIds = getStoredBook();
    const wishlistBookIds = getWishlistBook();
    if (readBookIds.length > 0) {
      setAllReadBooks(
        books.filter((book) => readBookIds.includes(book.bookId))
      );
    }
    
    if (wishlistBookIds.length > 0) {
      setAllWishlistBooks(
        books.filter((book) => wishlistBookIds.includes(book.bookId))
      );
    }
  }, [books]);

  return (
    <div>
      <h1 className="bg-slate-400 py-5 rounded-xl mb-10">Book</h1>
      <select className="select select-info w-full max-w-xs" value={language}  onChange={handleLanguageChange}>
        <option disabled selected value="0">
        Sort By
        </option>
        <option value='1'>Rating</option>
        <option value='2'>Number of pages</option>
        <option value='3'>Publisher year</option>
      </select>
      <div className="text-left border-b-2 mb-5">
        <button
          className={`tab ${activeTab === "Read Books" ? "btn" : ""}`}
          onClick={() => setActiveTab("Read Books")}
        >
          Read Books
        </button>
        <button
          className={`tab ${activeTab === "Wishlist Books" ? "btn" : ""}`}
          onClick={() => setActiveTab("Wishlist Books")}
        >
          Wishlist Books
        </button>
      </div>
      <div>
        {activeTab === "Read Books"
          ? allReadBooks.map((book, index) => (
              <ReadBook key={index} book={book}></ReadBook>
            ))
          : allWishlistBooks.map((book, index) => (
              <WishlistBooks key={index} book={book}></WishlistBooks>
            ))}
      </div>
    </div>
  );
}
