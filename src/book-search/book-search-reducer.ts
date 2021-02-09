
import * as BookSearchActions from './book-search-actions';

const INITIAL_STATE: any = {
    books: [],
    error: '',
    currentIndex: 0,
    maxResults: 10,
    type: '',
    myFavorites: []
    
}

export default ( state = INITIAL_STATE, action:any ) =>{
    switch ( action.type ){
        case(BookSearchActions.Actions.types.GET_SEARCH_BOOKS):
            return {...state, error:'', books: action.payload.response, currentIndex: 0, type: action.payload.searchWord };
        case( BookSearchActions.Actions.types.GET_SEARCH_BOOKS_WITH_PAGINATION ):
            return {...state, error:'', books: action.payload.response, currentIndex: action.payload.index };
        case(BookSearchActions.Actions.types.ERROR_GETTING_BOOKS):
            return {...state, error: action.payload};
        case(BookSearchActions.Actions.types.ADD_BOOK_TO_WISHLIST):{
            const index = state.books.items.findIndex( (value:any) => value.id === action.payload );
            const indexInFavorites = state.myFavorites.findIndex( (value:any) => value.id === action.payload );
            if( indexInFavorites === -1 ){
                const newArray = [
					...state.myFavorites,
					state.books.items[index],
                ];
                return {...state, myFavorites: newArray};
            }else{
                return {...state};
            }
        }
        case(BookSearchActions.Actions.types.REMOVE_BOOK_FROM_WISHLIST):{
            const index = state.myFavorites.findIndex( (value:any) => value.id === action.payload );
            if( index === -1 ){
                return {...state};
            }else{
                const newArray = [
					...state.myFavorites.slice(0, index),
					...state.myFavorites.slice(index+1)
                ];
                return {...state, myFavorites: newArray};
            }
        }
        default: return state;
    }
}