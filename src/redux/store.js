import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducerBook from './reducers/reducerAddBook';
import reducerFetchedBooks from './reducers/reducerFetchBooks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    library: reducerBook,
    search: reducerFetchedBooks
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;