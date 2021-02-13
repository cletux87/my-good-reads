import React from "react";
import { useSelector } from "react-redux";
import "./WishListHeaderStyles.scss";

const WishListHeader = () => {
  const listOfBooks = useSelector((state: any) => state.booksReducer);

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
