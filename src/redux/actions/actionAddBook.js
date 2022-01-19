import { ADD_BOOK, DELETE_BOOK, DELETE_ALL_BOOK } from "../constantes";

export const addBook = (datas) => {
    return {
        type: ADD_BOOK,
        payload: datas //objet qu'on envoie (titre et auteur)
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL_BOOK
    }
}