import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import * as BookActions from "../../service/book-search/book-search-actions";
import * as WishListActions from "../../service/ui/ui-actions";

import "./SearchBar.scss";

function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const listOfBooks = useSelector((state: any) => state.booksReducer);

  function handleSearch(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    if (userInput.length > 0) {
      dispatch(BookActions.getBooks(userInput));
    }
  }

  function showMobileWishList(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    dispatch(WishListActions.changeMobileFavorites());
  }

  useEffect(()=>{
    const { cancel, token } = axios.CancelToken.source();
    const timeOutId = setTimeout(() => dispatch(BookActions.getBooksWithAxios(userInput, token)), 500);
    return () => {cancel("No longer latest query"); return clearTimeout(timeOutId)};
  }, [userInput]);

  return (
    <div id="searchbarBackground">
      <div id="searchbarMainContainer">
        <a href="">
          <div id="searchbarLogoContainer">
            <img src="images/ebay-2.svg" alt="eBay logo" />
          </div>
        </a>

        <div id="searchbarInputSpace">
          <input
            id="searchbarInputField"
            placeholder="Search for book titles..."
            type="text"
            name="searchBar_data"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

          <div id="searchbarButton" onClick={(e) => handleSearch(e)}>
            <img
              src="images/lupa.png"
              alt="Graphic asset - Search button icon"
            />
          </div>

          <div
            id="headerShoppingCartContainer"
            onClick={(e) => showMobileWishList(e)}
          >
            <div id="headerShoppingCartItemsIndicator">
              <p id="var_headerShoppingCartIndex">
                {listOfBooks.myFavorites.length}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SearchBar;
