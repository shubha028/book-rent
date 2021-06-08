import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    return (
        <footer
        id="footer"
        className="page-footer font-small "
      >
        <div className="container">
          <div className="row d-flex center mx-auto text-center mb-4 mt-5">
            <div className="col-sm-12 col-md-12 mb-1">
              <Link className="navbar-brand mb-1" to="/">
                AtRentals
              </Link>
              <p>
             Together we read, spread love
                and positivity.
              </p>
              <br />
              <div className="row pb-3 mb-4  justify-content-center"  style={{ color: "red" }}>
              <Link><FontAwesomeIcon icon={["fas", "coffee"]} size="lg"  color="green"  /></Link>
              <i class="fa fa-facebook-square" aria-hidden="true" color="green"> </i> linkedin    instagram    twitter
            </div>


        <div className="footer-copyright text-center py-3">
          Copyright © 2021 | AtRentals
        </div>
        </div>
        </div>
        </div>
      </footer>
    );
  }
}