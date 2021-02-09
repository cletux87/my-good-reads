import React from "react";
import { useSelector } from "react-redux";
import CoinWithNumber from "./CoinWithNumber";
import "./WishListHeaderStyles.scss";

const WishListHeader = () => {
  const listOfBooks = useSelector((state: any) => state.booksReducer);

  return (
    <div id="wishListHeader" className="wishListContainer">
      <label>My Reading Wish list</label>
      <div className="wishListNumber">
        <CoinWithNumber value={listOfBooks.myFavorites.length} />
      </div>
    </div>
  );
};

export default WishListHeader;
