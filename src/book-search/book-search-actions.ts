import axios from "axios";
import { getBooksByType, getBooksByTypeWithPagination } from "./book-search.service";

let Actions: any = {};

Actions.types = {
    GET_SEARCH_BOOKS : 'GET_SEARCH_BOOKS',
    GET_SEARCH_BOOKS_WITH_PAGINATION : 'GET_SEARCH_BOOKS_WITH_PAGINATION',
    ERROR_GETTING_BOOKS: 'ERROR_GETTING_BOOKS',
    ADD_BOOK_TO_WISHLIST: 'ADD_BOOK_TO_WISHLIST',
    REMOVE_BOOK_FROM_WISHLIST: 'REMOVE_BOOK_FROM_WISHLIST'
}

export { Actions };

export const getBooksWithAxios = (searchWord:string, cancelToken:any) => async (dispatch:any) =>{
    try{
        const response  = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=12`,{
                cancelToken,
            });
        const payload = {
            response: response.data,
            searchWord
        }
        dispatch({
            type: Actions.types.GET_SEARCH_BOOKS,
            payload: payload
        });
    }catch( error ){
        dispatch({
            type: Actions.types.ERROR_GETTING_BOOKS,
            payload: 'The error'
        });
    }
    
} 

export const getBooks = (searchWord:string) => async (dispatch:any) =>{
    try{
        const response  = await getBooksByType(searchWord);
        const payload = {
            response,
            searchWord
        }
        dispatch({
            type: Actions.types.GET_SEARCH_BOOKS,
            payload: payload
        });
    }catch( error ){
        dispatch({
            type: Actions.types.ERROR_GETTING_BOOKS,
            payload: 'The error'
        });
    }
    
} 

export const getBooksWithPagination = (searchWord:string, index:number) => async (dispatch:any) =>{
    try{
        const response  = await getBooksByTypeWithPagination(searchWord, index);
        const payload = {
            response,
            index
        }
        dispatch({
            type: Actions.types.GET_SEARCH_BOOKS_WITH_PAGINATION,
            payload: payload
        });
    }catch( error ){
        dispatch({
            type: Actions.types.ERROR_GETTING_BOOKS,
            payload: 'The error'
        });
    }
    
} 

export const addBookToWishList = (id:string) => (dispatch:any) => {
    dispatch({
        type: Actions.types.ADD_BOOK_TO_WISHLIST,
        payload: id
    });
}

export const removeBookFromWishList = (id:string) => (dispatch:any) =>{
    dispatch({
        type: Actions.types.REMOVE_BOOK_FROM_WISHLIST,
        payload: id
    });
}
