import React from "react";

export default function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <a href={`/book/${bookId}`}>
      <div className="border p-5 rounded-lg m-2 flex flex-col justify-center items-center">
        <div className="bg-[#F3F3F3] px-20 py-5 rounded-lg">
          <img src={image} alt={bookName} />
        </div>
        <div className="text-start w-full px-5 pt-10 leading-loose ">
          <div className="border-b-2 border-dashed py-2">
            <div className="flex justify-between text-green-600 font-semibold pb-5">
              <h1 className="bg-green-100 px-2 rounded-lg">{tags[0]} </h1>
              <h1 className="bg-green-100 px-2 rounded-lg">{tags[1]} </h1>
            </div>
            <h1 className="text-xl font-bold">{bookName}</h1>
            <h1>By: {author}</h1>
          </div>
          <div className="flex justify-between py-2">
            <h1>Fiction</h1>
            <h1>{rating}</h1>
          </div>
          
        </div>
      </div>
    </a>
  );
}
