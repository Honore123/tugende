import React from 'react';
import { NavLink } from 'react-router-dom';
import {Station} from '../../api/User.js';

export default class Stationshome extends React.Component {

	render(){
		return (

		<option>
			{this.props.station.name}
		</option>

		);
	}
}