import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light backnav">
          <a className="navbar-brand" href="#"><img src={"inganji.png"} style={{width: '69px',height:'37px'}}/></a>
          <button className="navbar-toggler" type="button" style={{color:'#3b97ff',}} data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/" style={{color:'#3b97ff',}}><i className="fa fa-home"></i>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" style={{color:'#3b97ff',}}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{color:'#3b97ff',}}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" style={{color:'#3b97ff',}}>About</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" style={{color:'#3b97ff', background:'#022747',border:'#001b33',}} type="search" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
