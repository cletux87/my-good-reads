import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import BookTable from "./components/BookTable";
import WishListHeader from "./components/WishListHeader";
import BookTablePagination from "./components/BookTablePagination";
import WishListBar from "./components/WishListBar";
import Home from './components/Home';
import * as Utils from "./Utils";
import { ReducerTypes } from './service/ui/ui-reducer';
import "./styles/App.scss";

function App() {

  const listOfBooks = useSelector((state: any) => state.booksReducer);
    const showFavoritesMobile = useSelector(
        (state: any) => state.favoritesReducer
    );

  return (
      <div>
        <header>
                <SearchBar />
            </header>
            <main>
                <div className='appContainer'> 
                    <div className='appResponsiveWishListContainer' style={{display:`${showFavoritesMobile.show ? '': 'none' } `}}>
                    <WishListBar position="responsiveMobile"/>
                    </div>
                    <div className='appTableContainer'>
                    {
                        Utils.isNil(listOfBooks.books) || listOfBooks.books.length === 0
                        ? <Home />
                        : <><BookTable /><BookTablePagination /></> 
                    }
                    </div>
                    <div className='appWishListContainer'>
                        <WishListHeader />
                        <WishListBar position="responsiveDesktop" />
                    </div>
                </div>
            </main>
    </div>
  );
}

export default App;
