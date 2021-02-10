import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as BookActions from "../../service/book-search/book-search-actions";
import InfoBook from '../InfoBook';
import * as Utils from "../../Utils";
import Popup from '../Popup';
import ImageContainer from "../ImageContainer";
import "./BookElementStyle.scss";
import { ReactComponent as Wish } from "./wishHeart.svg";

const BookElement = (props: any) => {
  const { book } = props;
  const [showBook, setShowBook] = useState(false);
  const listOfBooks = useSelector((state: any) => state.booksReducer);
  const [isWishList, setIsWishList] = useState(() => {
    return isInWishList();
  });
  const dispatch = useDispatch();

  function isInWishList(): boolean {
    if (Utils.isNil(listOfBooks.myFavorites)) {
      return false;
    } else {
      const index = listOfBooks.myFavorites.findIndex(
        (value: any) => value.id === book.id
      );
      return index === -1 ? false : true;
    }
  }

  function sendWishList() {
    if (!isWishList) {
      dispatch(BookActions.addBookToWishList(book.id));
    } else {
      dispatch(BookActions.removeBookFromWishList(book.id));
    }
    setIsWishList(!isWishList);
  }

  useEffect(() => {
    setIsWishList(isInWishList());
  }, [listOfBooks]);

  return (
    <div id="bookElement">
       { showBook ? <Popup closed={()=>setShowBook(false)} ><InfoBook book={book}/></Popup> : null }
      <button id="wishButton" className="wish" onClick={() => sendWishList()}>
        <Wish fill={isWishList ? "red" : "#969696"} />
      </button>
      <div  onClick={() => setShowBook(true)}>
        <ImageContainer
          imageSource={
            Utils.isNil(book.volumeInfo.imageLinks) ||
            Utils.isNil(book.volumeInfo.imageLinks.smallThumbnail)
              ? "images/noImage.png"
              : book.volumeInfo.imageLinks.smallThumbnail
          }
          alt={`${book.volumeInfo.title} cover`}
        />
      </div>
      <div className="bookInfoContainer">
        <div className="itemTitle">{book.volumeInfo.title}</div>
        <div className="itemAuthor">
          {book.volumeInfo.authors ? `by ${book.volumeInfo.authors}` : null}
        </div>
      </div>
    </div>
  );
};

export default BookElement;
