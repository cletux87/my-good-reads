
import * as BookSearchActions from './book-search-actions';

export interface AllBooksSearchTypes{
    books: BookType,
    error: string,
    currentIndex: number,
    maxResults: number,
    type: string,
    myFavorites: BookType
}

export interface InfoBookType{
    book:BookType,
    volumeInfo: VolumeInfoType,
    id: string
  }
  
  export interface BookType{
    volumeInfo: VolumeInfoType,
    id: string,
    findIndex: Function,
    length: number
  }
  
  interface VolumeInfoType{
    title: string,
    industryIdentifiers: IndustryIdentifiersType[],
    authors: AuthorsType,
    categories: CategoriesType,
    description: string,
    previewLink: string,
    imageLinks: any
  }
  
  interface IndustryIdentifiersType{
    identifier: string
  }
  
  interface AuthorsType{
    [index: number]: string,
    length: number
  }
  
  interface CategoriesType{
    [index: number]: string,
    length: number
  }

interface ReducerType{
    books: any,
    error: string,
    currentIndex: number,
    maxResults: number,
    type: string,
    myFavorites: any

}

const INITIAL_STATE: ReducerType = {
    books: [],
    error: '',
    currentIndex: 0,
    maxResults: 10,
    type: '',
    myFavorites: []
    
}
const emptyVolume: VolumeInfoType = {
    title: "",
    industryIdentifiers: [],
    authors: [],
    categories: [],
    description: "",
    previewLink: "",
    imageLinks: ""

}

export const emptyValues: InfoBookType ={
    book:{
        id:"",
        volumeInfo: emptyVolume,
        findIndex: ()=>null,
        length:0
    },
    volumeInfo: emptyVolume,
    id: ""
}

interface Action{
    type:string,
    payload:any
}

export default ( state = INITIAL_STATE, action:Action ) =>{
    switch ( action.type ){
        case(BookSearchActions.ActionTypes.GET_SEARCH_BOOKS):
            return {...state, error:'', books: action.payload.response, currentIndex: 0, type: action.payload.searchWord };
        case( BookSearchActions.ActionTypes.GET_SEARCH_BOOKS_WITH_PAGINATION ):
            return {...state, error:'', books: action.payload.response, currentIndex: action.payload.index };
        case(BookSearchActions.ActionTypes.ERROR_GETTING_BOOKS):
            return {...state, error: action.payload};
        case(BookSearchActions.ActionTypes.ADD_BOOK_TO_WISHLIST):{
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
        case(BookSearchActions.ActionTypes.REMOVE_BOOK_FROM_WISHLIST):{
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