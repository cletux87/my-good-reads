import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BookActions from "../../service/book-search/book-search-actions";
import "./bookTablePagination.scss";

const BookTablePagination = () => {
  const listOfBooks = useSelector((state: any) => state.booksReducer);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentIndex(listOfBooks.currentIndex);
  }, [listOfBooks]);

  function handleIndexClick(value: number) {
    dispatch(BookActions.getBooksWithPagination(listOfBooks.type, value));
  }

  function renderButtons() {
    let viewPage: any = [];
    const index = listOfBooks.currentIndex;
    if (currentIndex === 0) {
      viewPage = [0];
    }
    if (currentIndex > 0) {
      viewPage = [index - 1, index, index + 1];
    }
    return (
      <>
        {currentIndex === 0 ? null : (
          <button
            id="backwardPagination"
            onClick={() => handleIndexClick(listOfBooks.currentIndex - 1)}
            className="paginationRoundButton"
          >
            {"<"}
          </button>
        )}

        {viewPage.map((value: number) => {
          return (
            <button
              id={`paginationIndex:${index}`}
              onClick={() => handleIndexClick(value)}
              className={
                value === index
                  ? "paginationCurrentSquareButton"
                  : "paginationSquareButton"
              }
            >
              {value + 1}
            </button>
          );
        })}
        <button
          id="forwardPagination"
          onClick={() => handleIndexClick(listOfBooks.currentIndex + 1)}
          className="paginationRoundButton"
        >
          {">"}
        </button>
      </>
    );
  }

  return <div className="tablePaginationContainer">{renderButtons()}</div>;
};

export default BookTablePagination;
