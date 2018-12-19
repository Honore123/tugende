import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';

export default class CheckedTrip extends React.Component {
	checkBusAv(){
     	sessionStorage.setItem("fromAvialable", this.props.schedules.from);
      	sessionStorage.setItem("toAvialable", this.props.schedules.to);
      	sessionStorage.setItem("timeAvailable", this.props.schedules.time);
      	window.open("/seats","_self");
    }
	render(){
		return (
			<tr onClick={this.checkBusAv.bind(this)}>
				<td style={{borderColor:'#001737'}}>{this.props.schedules.from}</td>
				<td style={{borderColor:'#001737'}}>{this.props.schedules.to}</td>
				<td style={{borderColor:'#001737'}}>{this.props.schedules.price}</td>
			</tr>
		);
	}
}