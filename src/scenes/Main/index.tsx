import React from 'react';
import { useSelector } from "react-redux";
import * as Utils from "../../Utils";
import "./main.scss";
import SearchBar from "../../components/SearchBar";
import BookTable from "../../components/BookTable";
import WishListHeader from "../../components/WishListHeader";
import BookTablePagination from "../../components/BookTablePagination";
import WishListBar from "../../components/WishListBar";
import Home from '../../scenes/Home';

function Main(){

    const listOfBooks = useSelector((state: any) => state.booksReducer);
    const showFavoritesMobile = useSelector(
        (state: any) => state.favoritesReducer
    );

    return(
        <>
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
        </>
    );

}

export default Main;