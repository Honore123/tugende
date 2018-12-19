import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';

export default class SeatsPrice extends React.Component {

	render(){
		return (
			<div className="col-md-6" style={{backgroundColor:'#07224e',color:'#3b97ff',padding:'10px 0px'}}>
				{this.props.schedules.price} rwf
			</div>
		);
	}
}