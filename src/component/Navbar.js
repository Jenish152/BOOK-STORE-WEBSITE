import React from "react";
import { BrowserRouter as Router , Link } from 'react-router-dom';


export const Navbar = ()=>{
     return(
         <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/grid">Grid</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/custom">Custometheme</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}