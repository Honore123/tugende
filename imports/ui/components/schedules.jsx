import React from 'react';
import { NavLink } from 'react-router-dom';
import {Stationline} from '../../api/User.js';

export default class Stationlines extends React.Component {

	render(){
		return (
		<tr>
			<td>{this.props.stationline.from}</td>
			<td style={{backgroundColor:'#001123',color:'#008CFF'}}>{this.props.stationline.to}</td>
			<td>{this.props.stationline.date}</td>
			<td>{this.props.stationline.time}</td>
			<td>{this.props.stationline.seats}</td>
			<td>{this.props.stationline.price}</td>
			<td><button className="btn btn-danger" onClick={this.handleLoginClick}><i className="fa fa-edit"></i> edit</button></td>
		</tr>
		);
	}
}