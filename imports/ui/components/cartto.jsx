import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';

export default class CartTo extends React.Component {

	render(){
		return (
			<div className="col-md-6 text-left mb-3 bor">
				{this.props.schedules.to}
			</div>
		);
	}
}