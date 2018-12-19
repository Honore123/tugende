import React from 'react';
import { NavLink } from 'react-router-dom';
export default class AdminH extends React.Component {
	logOut(e){
		e.preventDefault();
		alert("logout successfully");
		window.open("/admin","_self");
	}
  render() {
    return (
	  <div style={{backgroundColor:'#B9C5D6'}}>
   		<ul className="nav nav-pills nav-fill backnav">
   		<li className="nav-item">
		    <a className="nav-link" href="#" style={{marginTop:'10px'}}>Back</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link" href="#"><img src={'tugende.png'} style={{height:'50px'}}/></a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link" onClick={this.logOut.bind(this)} href="#" style={{marginTop:'10px'}} >Log out <i className="fa fa-user-circle"></i></a>
		  </li>
		</ul>
      </div>
    	);
	}
}