import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveStoredBook, saveWishlistBook } from "../../utility/localstorage";

export default function BookDetails() {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  
  const handelReadBook = () => {
    saveStoredBook(bookId)
    console.log("Book read successfully");
  };
  const handelWishlist=()=>{
    saveWishlistBook(bookId);
    console.log("Wishlist successfully");
  }
  return (
    <div>
      <div className="grid grid-cols-2 justify-center items-center py-20">
        <div className="bg-[#F3F3F3] mx-auto p-10 rounded-xl">
          <img src={image} alt={bookName} className="w-60" />
        </div>
        <div className="text-start w-full px-5 pt-10 leading-loose ">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <h1 className="pb-2">By: {author}</h1>
          <h1 className="border-y-2 py-2">Fiction</h1>
          <h1>Review: {review}</h1>
          <div className="flex gap-5 border-b-2 pb-2">
            <h1>Tag:</h1>
            <h1 className="bg-green-100 px-2 rounded-lg"># {tags[0]} </h1>
            <h1 className="bg-green-100 px-2 rounded-lg"># {tags[1]} </h1>
          </div>
          <h1>Number of page: {totalPages}</h1>
          <h1>Publisher: {publisher}</h1>
          <h1>Year of Publishing: {yearOfPublishing}</h1>
          <h1>Rating: {rating}</h1>
          <div className="mt-5">
            <button className="btn" onClick={handelReadBook}>
              Read
            </button>
            <button className="btn ml-5" onClick={handelWishlist}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
