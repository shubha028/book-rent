import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"  style={{ color: "blue" }}>AtRentals</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Books</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Books Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Sign In</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}