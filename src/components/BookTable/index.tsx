import React from "react";
import { useSelector } from "react-redux";
import BookElement from "../BookElement";
import "./bookTable.scss";

const BookTable = () => {
  const listOfBooks = useSelector((state: any) => state.booksReducer);

  function renderTable() {
    return (
      <>
        <div id="bookTableContainer" className="bookTableContainer">
          {listOfBooks.books.items.map((value: any, index: any) => {
            return (
              <>
                <div
                  data-cy={`bookElementIndex:${index}`}
                  className="bookElementInfoContainer"
                >
                  <BookElement book={value} key={value.id} />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }

  function isNil(value: any) {
    return value === undefined || value === null ? true : false;
  }

  return <div>{!isNil(listOfBooks.books.items) ? renderTable() : null}</div>;
};

export default BookTable;
