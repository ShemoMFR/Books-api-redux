import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import AddBooks from './containers/AddBooks';
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
          <Route path='/' element={<AddBooks />} />
          <Route path='/search' element={<SearchBooks />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;


