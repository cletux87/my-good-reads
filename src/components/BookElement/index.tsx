import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as BookActions from "../../service/book-search/book-search-actions";
import InfoBook from '../InfoBook';
import * as Utils from "../../Utils";
import Popup from '../Popup';
import ImageContainer from "../ImageContainer";
import { BookType, InfoBookType } from '../../service/book-search/book-search-reducer';
import "./BookElementStyle.scss";
import { ReactComponent as Wish } from "./wishHeart.svg";

interface BookElementProps{
  book: InfoBookType,
  className:string
}

const BookElement = (props: BookElementProps) => {
  const { book, className } = props;
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
        (value: {id:string}) => value.id === book.id
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
    <li id="bookElement" className={className}>
       { showBook ? <Popup closed={()=>setShowBook(false)} ><InfoBook book={book}/></Popup> : null }
      <button id="wishButton" className="wish" onClick={() => sendWishList()}>
        <Wish fill={isWishList ? "red" : "#969696"} />
      </button>
      <ImageContainer
          imageSource={
            Utils.isNil(book.volumeInfo.imageLinks) ||
            Utils.isNil(book.volumeInfo.imageLinks.smallThumbnail)
              ? "images/noImage.png"
              : book.volumeInfo.imageLinks.smallThumbnail
          }
          alt={`${book.volumeInfo.title} cover`}
          onClick={() => setShowBook(true)}
      />
      <section className="bookInfoContainer">
        <h1 className="itemTitle">{book.volumeInfo.title}</h1>
        <article className="itemAuthor">
          {book.volumeInfo.authors ? `by ${book.volumeInfo.authors}` : null}
        </article>
      </section>
    </li>
  );
};

export default BookElement;
