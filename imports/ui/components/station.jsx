import React from 'react';
import { NavLink } from 'react-router-dom';
import {Station} from '../../api/User.js';

export default class Stations extends React.Component {

	render(){
		return (

		<a className="nav-link" id={this.props.station._id + "-tab"} data-toggle="pill" href={"#" + this.props.station._id} role="tab" aria-controls={this.props.station._id} aria-selected="false" style={{borderRadius:'0px',borderBottom:'1px solid #005CC5'}}>
			{this.props.station.name}
		</a>

		);
	}
}