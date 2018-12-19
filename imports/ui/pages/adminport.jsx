import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {Station} from '../../api/User.js';
import AdminH from '../components/adminH.jsx';
import Buses from '../components/buses.jsx';
import Newstation from '../components/newstation.jsx';
import Stations from '../components/station.jsx';
import StationDetails from '../components/stationDetails.jsx';

class Adminport extends React.Component {
	renderStation() {
       let filteredTasks = this.props.station;

    return filteredTasks.map((station) => (
      <Stations key={station._id} station={station} />
    ));
  }
  renderDetails(){
  	let filteredTasks = this.props.station;

    return filteredTasks.map((station) => (
      <StationDetails key={station._id} station={station} />
    ));
  }
  render() {
    return (
	  <div style={{backgroundColor:'#B9C5D6'}}>
   		<AdminH/>
   		<div className="container-fluid">
	   		<div className="row" style={{height:'730px'}}>
			  <div className="col-3 text-center" style={{backgroundColor:'#001123',padding:'0px'}}>
			    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			      <div className="dropdown">
					  <a className="nav-link" data-toggle="collapse" href="#buschedules" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#002B44',color:'#00FFF6',borderRadius:'0px',borderBottom:'2px solid #001123'}}>BUS SCHEDULES</a>
					  <div className="collapse text-left" id='buschedules'>
					     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					      {this.renderStation()}
					      <a className="nav-link" id="v-pills-newstation-tab" data-toggle="pill" href="#v-pills-newstation" role="tab" aria-controls="v-pills-newstation" aria-selected="false" style={{borderRadius:'0px',color:'#11BA3E'}}>NEW STATION <i className="fa fa-plus-circle"></i></a>
					    </div>
					  </div>
					  <a className="nav-link" data-toggle="collapse" href="#dashboard" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#002B44',color:'#00FFF6',borderRadius:'0px'}}>DASHBOARD</a>
					  <div className="collapse text-left" id='dashboard'>
					     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					      <a className="nav-link" id="v-pills-bustation-tab" data-toggle="pill" href="#v-pills-bustation" role="tab" aria-controls="v-pills-messages" aria-selected="false" style={{borderRadius:'0px',borderBottom:'1px solid #005CC5'}}>BUS STATION</a>
					      <a className="nav-link" id="v-pills-ticketstatus-tab" data-toggle="pill" href="#v-pills-ticketstatus" role="tab" aria-controls="v-pills-settings" aria-selected="false" style={{borderRadius:'0px'}}>TICKET STATUS</a>
					    </div>
					  </div>
					</div>
			    </div>
			  </div>
			  <div className="col-9" style={{padding:'0px'}}>
			    <div className="tab-content" id="v-pills-tabContent">
			    	{this.renderDetails()}
			      <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
			      <div className="tab-pane fade show active" id="v-pills-welc" role="tabpanel" aria-labelledby="v-pills-welc-tab">welcome</div>
			      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Buses/></div>
			      <div className="tab-pane fade" id="v-pills-bustation" role="tabpanel" aria-labelledby="v-pills-bustation-tab">bus stations</div>
      			  <div className="tab-pane fade" id="v-pills-ticketstatus" role="tabpanel" aria-labelledby="v-pills-ticketstatus-tab">Ticket status</div>
      			  <div className="tab-pane fade" id="v-pills-newstation" role="tabpanel" aria-labelledby="v-pills-newstation-tab"><Newstation/></div>
			    </div>
			  </div>
			</div>
		</div>
      </div>
    	);
	}
}
export default withTracker(() => {
  return {
     station: Station.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Adminport);