import React from "react";
import { useSelector } from "react-redux";
import { AllBooksSearchTypes } from '../../service/book-search/book-search-reducer';
import "./WishListHeaderStyles.scss";

interface RootState{
  booksReducer: AllBooksSearchTypes
}

const WishListHeader = () => {
  const listOfBooks = useSelector((state: RootState) => state.booksReducer);

  return ( 
    <div id="wishListHeader" className="wishListContainer">
      <label>My Reading Wish list</label>
      <div className="wishListNumber">
        <div id="wishListState">{listOfBooks.myFavorites.length}</div>
      </div>
    </div>
  );
};

export default WishListHeader;
