import './Header.scss';
import React from "react";


export default function Header(props) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="https://www2.gov.bc.ca">
            <img
              class="img-fluid d-none d-md-block"
              src="/images/bcid-logo-rev-en.svg"
              width="181"
              height="44"
              alt="B.C. Government Logo"
            />
            <img
              class="img-fluid d-md-none"
              src="/images/bcid-symbol-rev.svg"
              width="64"
              height="44"
              alt="B.C. Government Logo"
            />
          </a>
          <div class="navbar-brand">
            {props.name}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}