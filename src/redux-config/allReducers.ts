import { combineReducers } from 'redux';
import booksReducer from '../book-search/book-search-reducer';
import favoritesReducer from '../service/favorites-responsive/favorites-responsive-reducer';

export default combineReducers({
    booksReducer,
    favoritesReducer,
});