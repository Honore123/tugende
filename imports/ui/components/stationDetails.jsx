import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {Station} from '../../api/User.js';
import {Stationline} from '../../api/User.js';
import Stationlines from '../components/schedules.jsx';

class StationDetails extends React.Component {
	
	renderStationline() {
       let filteredTasks = this.props.stationline;

    return filteredTasks.map((stationline) => (
      <Stationlines key={stationline._id} stationline={stationline} />
    ));
  }

	render(){
		return (

			<div className="tab-pane fade" id={this.props.station._id} role="tabpanel" aria-labelledby={this.props.station._id + "-tab"}>
				<h1 className="text-center">{this.props.station.name}</h1>
				<table className="table table-bordered" style={{margin:'0px'}}>
					<thead className="thead-light">
					<tr>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>From</th>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>To</th>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>Date</th>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>Time</th>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>Seats</th>
						<th style={{backgroundColor:'#001123',color:'#1160BA'}}>Price</th>
						<th className="text-center" style={{backgroundColor:'#001123',color:'#1160BA'}}><i className="fa fa-gear"></i></th>
					</tr>
					</thead>
					<tbody>
						{this.renderStationline()}
					</tbody>
				</table>
			</div>
		);
	}	
}
export default withTracker(props => {
  return {
     stationline: Stationline.find({from: props.station.name}).fetch(),
  };
})(StationDetails);