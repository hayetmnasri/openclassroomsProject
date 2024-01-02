import React from "react"
import { NavLink } from "react-bootstrap"

const Header = () => {
  return (
  <header>
    <h1>Book Management App</h1>
    <hr/>
    <div className="Links">
      <NavLink to="/" className="link" activeClassName="active" exact>
        Books List
        </NavLink>
        <NavLink to="AddBook" className="link" activeClassName="active">
         Add book
        </NavLink>
    </div>
  </header>
  );
};
export default Header;