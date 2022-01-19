import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addBook, deleteBook, deleteAll } from '../redux/actions/actionAddBook';
import FlipMove from 'react-flip-move';

const AddBooks = ({libraryData, addBook, deleteBook, deleteAll}) => {

    const initialState = {
        title: '',
        author: ''
    }

    const [newDatas, setNewDatas] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(newDatas);

        setNewDatas(initialState);
    }

    const displayDatas = libraryData.length > 0 ? 

        <FlipMove>
            {
                libraryData.map(book => {
                    return (
                        <li key={book.id} className='list-group-item list-group-item-light d-flex justify-content-between'>
                            <span><strong>Titre : {book.title}</strong></span>
                            <span><strong>Auteur : {book.author}</strong></span>
                            <span className='btn btn-danger' onClick={() => deleteBook(book.id)}>x</span>
                        </li>
                    )
                })
            }
        </FlipMove>
        :   <p className='text-center'>Aucun livre dans la bibliothèque</p>

        const deleteAllBooksBtn = libraryData.length > 0 && 
            <ul className='list-group'>
                <button className='btn btn-danger mt-4 mb-5' onClick={() => deleteAll()}>Effacer tous les livres</button>
            </ul>

    return (
        <main className='main'>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container text-center'>
                    <h1 className='display'>BOOKS</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>

                    <form className='form-inline justify-content-center' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type="text" value={newDatas.title} onChange={(e) => setNewDatas({...newDatas, title: e.target.value})} className="form-control" placeholder="Titre" required />
                        </div>
                        <div className='form-group'>
                            <input type="text" value={newDatas.author} onChange={(e) => setNewDatas({...newDatas, author: e.target.value})} className="form-control ml-3" placeholder="Auteur" required />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-outline-secondary ml-3'>Ajouter un livre</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='container' style={{minHeight: '200px'}}>
                <div className='row'>
                    <div className='col-md-12'>
                        
                            {displayDatas}

                        <div className='d-flex justify-content-center'>
                            { deleteAllBooksBtn }
                        </div>
                    </div>
                </div>
            </div>
            
        </main >
    )
}

const addStateToProps = (state) => {
    return {
        libraryData: state.library
    }
}

const addDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        deleteBook: (id) => dispatch(deleteBook(id)),
        deleteAll: () => dispatch(deleteAll())
        }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks);
