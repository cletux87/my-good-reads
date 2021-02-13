import { combineReducers } from 'redux';
import booksReducer from '../service/book-search/book-search-reducer'
import favoritesReducer from '../service/ui/ui-reducer';

export default combineReducers({
    booksReducer,
    favoritesReducer,
});