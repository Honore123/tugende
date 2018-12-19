import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';
import Home from '../pages/Cart.jsx';
export default class TotalPrice extends React.Component {

	render(){
		return (

			<div className="col-md-12 mt-4" style={{background:'#040F28',fontSize:'18px',border:'3px solid #040F28',borderRadius:'20px',padding:'5px 0px'}}>
			Ticket fare: {this.props.schedules.price * sessionStorage.getItem('cartSeats')} Rwf
			</div>
			);
	}
}