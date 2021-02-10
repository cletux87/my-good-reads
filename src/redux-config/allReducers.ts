import { combineReducers } from 'redux';
import booksReducer from '../service/book-search/book-search-reducer'
import favoritesReducer from '../service/favorites-searchbar/favorites-searchbar-reducer';

export default combineReducers({
    booksReducer,
    favoritesReducer,
});