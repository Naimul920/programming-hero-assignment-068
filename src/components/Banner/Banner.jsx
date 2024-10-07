import React from "react";
import book1 from "../../assets/img/book01.png";

export default function Banner() {
  return (
    <div className="bg-[#F3F3F3] px-28 py-20 rounded-lg mb-5 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn mt-5 bg-[#23BE0A]" type="button">View The List</button>
        </div>
        <img src={book1} alt="" />
      </div>
    </div>
  );
}
