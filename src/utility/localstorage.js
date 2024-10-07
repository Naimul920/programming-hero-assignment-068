import { toast } from 'react-toastify';
const getStoredBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};
// const isExistWishlistBook=()=>{

// }
const saveStoredBook = (id) => {
  const storedBook = getStoredBook();
  const wishlistBook = getWishlistBook();
  const isExistsWishList = wishlistBook.find((bookId=> bookId===id));
  // console.log(typeof isExistsWishList);
  if(isExistsWishList){
    const newWishlistBook = wishlistBook.filter(bookId=> bookId!==isExistsWishList);
    localStorage.setItem("wishlist-books", JSON.stringify(newWishlistBook));
  }
  const exists = storedBook.find((bookId) => bookId === id);
  if (!exists) {
    storedBook.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedBook));
    toast.success("Book add in read list")
  }else{
    toast.error("Book already exist on read books");
  }
};
const getWishlistBook = () => {
  const storedWishlist= localStorage.getItem("wishlist-books");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const saveWishlistBook = (id) => {
  const wishlistBook = getWishlistBook();
  const storedBook = getStoredBook();
  const isExistStoredBook = storedBook.find((bookId)=> bookId===id);
  if(!isExistStoredBook){
    const exists = wishlistBook.find((bookId) => bookId === id);
    if (!exists) {
      wishlistBook.push(id);
      localStorage.setItem("wishlist-books", JSON.stringify(wishlistBook));
      toast.success("Book add in wishlist")
    }else{
      toast.error("Book already exist on wishlist books");
    }
  }else{
    toast.error("Book already read")
  }
  
};

export { getStoredBook, saveStoredBook, getWishlistBook, saveWishlistBook };
