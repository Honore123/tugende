import React from 'react';
import { NavLink } from 'react-router-dom';
import {Schedules} from '../../api/User.js';

export default class AvailableFrom extends React.Component {

	render(){
		return (
			<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>
				{this.props.schedules.from}
			</div>
		);
	}
}