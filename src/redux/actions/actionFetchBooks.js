import { FETCH_BOOKS_LOADING, FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS } from "../constantes";
import axios from "axios";

export const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}

export const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

export const fetchBooksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

const GOOGLE_API_KEY = 'AIzaSyDA6wY8fzk8MLlbaVceOkW9LOvgal1dSak';

export const fetchBooks = (title) => {
    return (dispatch) => {
        dispatch(fetchBooksLoading());
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
            .then(data => dispatch(fetchBooksSuccess(data.data.items)))
            .catch(error => dispatch(fetchBooksError(error.message)))
    }
}