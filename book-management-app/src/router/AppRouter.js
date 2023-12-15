import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/AddBook" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;