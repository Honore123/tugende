import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';

export default class CheckedSeat extends React.Component {
	 selectedBusSeat(){
	   var fromAv = sessionStorage.getItem('fromAvialable');
	   sessionStorage.setItem("totalSeats", this.props.schedules.seats);
	   sessionStorage.setItem("selectorSeat", this.props.schedules._id);
	   window.open("/cart","_self");
	  }

	render(){
		let content;
		if (this.props.schedules.seats == 0) {
			content = <tr style={{backgroundColor:'#bb0033',color:'#ffffff'}}>
						<td style={{borderColor:'#001737'}}>{this.props.schedules.time}</td>
						<td style={{borderColor:'#001737'}}>Full</td>
					</tr>
		}else{
			content = <tr onClick={this.selectedBusSeat.bind(this)}>
						<td style={{borderColor:'#001737'}}>{this.props.schedules.time}</td>
						<td style={{borderColor:'#001737'}}>{this.props.schedules.seats} Seats</td>
					</tr> 
		}
		return (
				content
		);
	}
}