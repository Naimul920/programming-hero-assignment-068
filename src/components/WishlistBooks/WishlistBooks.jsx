export default function WishlistBooks({book}) {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex gap-10 mb-10 border p-5 rounded-lg">
      <div className="bg-slate-200 rounded-xl p-10">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2 text-start  w-full">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <h1>By: {author}</h1>
        <h1>
          Tags:
          <span className="bg-green-400 p-2 rounded-lg text-white">
            {tags[0]}
          </span>{" "}
          <span className="bg-green-400 p-2 rounded-lg text-white">
            {tags[1]}
          </span>
        </h1>
        <h1>Year of publishing : {yearOfPublishing}</h1>
        <div className="flex gap-5 border-b-2">
          <h1>Page: {totalPages}</h1>
          <h1>Publisher: {publisher}</h1>
        </div>
        <div className="flex gap-5 items-center py-2">
          <h1>Category: Classic</h1>
          <h1>Rating: {rating}</h1>
          <a href={`/book/${bookId}`}><button className="bg-green-600 text-white p-2 rounded-xl">View Details</button></a>
        </div>
      </div>
    </div>
  )
}
