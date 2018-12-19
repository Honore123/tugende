import React from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Schedules} from '../../api/User.js';
import {User} from '../../api/User.js';
import Home from '../pages/Cart.jsx';
export default class TotalPrint extends React.Component {
	   dateCart(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var datecart = day +"/"+ month +"/"+ year;

        return datecart;
    }
	render(){
		return (
			<div className="col-md-12" ref="testPrinta" style={{background:'#FFFFFF', color:'#0B2C5E'}}>
				<p className="mt-3" style={{fontSize:'15px'}}>Name: {this.props.currentUser ? this.props.currentUser.username : "not logged in"}</p>
				<p style={{fontSize:'17px'}}>YOU HAVE PURCHASED A SINGLE RIDE TICKET</p>
				<p style={{fontSize:'20px'}}>{this.props.schedules.from} - {this.props.schedules.to}</p>
				<p style={{fontSize:'23px'}}>VOLCANO</p>
				<p style={{fontSize:'23px'}}>At {this.props.schedules.time}</p>
				<p style={{fontSize:'23px'}} ref="testPrinta">Date: {this.dateCart()}</p>
				<p>TUGENDE</p>
				<p style={{fontSize:'15px'}}>Ticket No: 004</p>
				<p style={{fontSize:'15px'}}>Enjoy the ride with us, tugende</p>
			</div>
			);
	}
}
export default withTracker(() => {
  return {
     currentUser: Meteor.user(),
  };
})(TotalPrint);