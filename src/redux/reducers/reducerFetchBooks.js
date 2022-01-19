import { FETCH_BOOKS_LOADING, FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS } from "../constantes";

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchedBooks = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payload
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducerFetchedBooks;