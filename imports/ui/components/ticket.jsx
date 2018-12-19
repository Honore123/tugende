import React from 'react';
import { NavLink } from 'react-router-dom';
import {Myticket} from '../../api/User.js';

export default class Ticket extends React.Component {

	render(){
		let content;
		var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var min = d.getMinutes();
    	var hour = d.getHours();
        var datecart = day +"-"+ month +"-"+ year;
        var timecart = hour +":"+min;
        if (datecart > this.props.myticket.date) {
        	content = <tr>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.name}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.agency}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.seats}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.date}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.time}</td>
						<td style={{borderColor:'#001737'}}><span className="badge badge-pill badge-danger">Expired</span></td>
					</tr>
        }else{
        	if (timecart > this.props.myticket.time) {
        		content = <tr>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.name}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.agency}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.seats}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.date}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.time}</td>
						<td style={{borderColor:'#001737'}}><span className="badge badge-pill badge-danger">Expired</span></td>
					</tr>
				}else{
					content = <tr>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.name}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.agency}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.seats}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.date}</td>
						<td style={{borderColor:'#001737'}}>{this.props.myticket.time}</td>
						<td style={{borderColor:'#001737'}}><span className="badge badge-pill badge-success">Active</span></td>
					</tr>
				}
        }
		return (
			content
		);
	}
}