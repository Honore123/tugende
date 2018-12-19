import React from 'react';
import { NavLink } from 'react-router-dom';
import {User} from '../../api/User.js';
export default class Header2 extends React.Component {
  logout(){
    Meteor.logout((er)=>{
      if (er) {
        alert("failed to logout");
      }
      else{
        alert("logout successfully");
        window.open("/","_self");
      }
    });
  }
  render() {
    var navOptions;
    if (User.isLoggedIn()) {
      navOptions = (
<ul className="navbar-nav ml-auto">
  <li className="nav-item active">
    <a className="nav-link" href="/myticket" style={{color:'#3b97ff',}}>MY TICKET<span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" style={{color:'#3b97ff',}} href="#" onClick={this.logout}><i className="fa fa-sign-out"></i> Logout</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'uk.png'} style={{height:'15px'}}/> Eng</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'rw.png'} style={{height:'15px'}}/> Kiny</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'france.png'} style={{height:'15px'}}/> Fren</a>
  </li>
</ul>
);
    }
    else{
      navOptions = (
<ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <a className="nav-link" href="/login" style={{color:'#3b97ff',}}><i className="fa fa-sign-in"></i> Sign in</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'uk.png'} style={{height:'15px'}}/> Eng</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'rw.png'} style={{height:'15px'}}/> Kiny</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src={'france.png'} style={{height:'15px'}}/> Fren</a>
  </li>
</ul>
);
    }
    return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light backnav2">
    <a className="navbar-brand" href="#" style={{color:'#3b97ff',}}>DOWNLOAD <i className="fa fa-download"></i></a>
    <button className="navbar-toggler" type="button" style={{color:'#3b97ff',}} data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        {navOptions}
    </div>
  </nav>
</div>
    );
  }
}
