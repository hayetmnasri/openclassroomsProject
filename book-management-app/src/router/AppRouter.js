import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', [])
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={BooksList} path="/" exact={true} />
            <Route 
            render={(props)=>(
              <AddBook {...props} books={books} setBooks={setBooks} />
            )}
            path='/add'
          >
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;