import React from "react";
import { useSelector } from "react-redux";
import BookElement from "../BookElement";
import * as Utils from '../../Utils';
import { InfoBookType } from '../../service/book-search/book-search-reducer';
import "./bookTable.scss";

const BookTable = () => {
  const listOfBooks = useSelector((state: any) => state.booksReducer);

  function renderTable() {
    return (
      <ul id="bookTableContainer" className="bookTableContainer">
        {listOfBooks.books.items.map((value: InfoBookType, index: number) => {
          return (
              <BookElement 
                  book={value} 
                  key={value.id} 
                  data-cy={`bookElementIndex:${index}`}
                  className="bookElementInfoContainer" 
              />
          );
        })}
      </ul>
    );
  }

  return <div>{!Utils.isNil(listOfBooks.books.items) ? renderTable() : null}</div>;
};

export default BookTable;
