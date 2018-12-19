import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import {Schedules} from '../../api/User.js';
import AvailableFrom from '../components/availablefrom.jsx'
import AvailableTo from '../components/availableTo.jsx'
import AvailableDate from '../components/availableDate.jsx'
import SeatsPrice from '../components/seatprice.jsx'
import CheckedSeat from '../components/checkedSeat.jsx'

class Seats extends React.Component {
      dateSeats(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var datecart = day +"-"+ month +"-"+ year;

        return datecart;
    }
    availableFrom() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <AvailableFrom key={schedules._id} schedules={schedules} />
    ));
  }
    availableTo() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <AvailableTo key={schedules._id} schedules={schedules} />
    ));
  }
    availableDate() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <AvailableDate key={schedules._id} schedules={schedules} />
    ));
  }
  seatsPrice() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <SeatsPrice key={schedules._id} schedules={schedules} />
    ));
  }
  checkedSeat() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CheckedSeat key={schedules._id} schedules={schedules} />
    ));
  }
  render() {
    return (
    		<div>
          <Header />
          <Header2 />
    			<div className="container-fluid">
    				<div className="row">
    					<div className="col-md-8"></div>
    					<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
    						<div className="container-fluid">
    							<div className="row" style={{paddingTop:'50px'}}>
                    <div className="col-md-12"><img src={'tugende.png'} style={{height:'30px',marginBottom:'42px'}}/></div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>From:</div>
    								{this.availableFrom()}
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>To:</div>
    								{this.availableTo()}
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Date:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>{this.dateSeats()}</div>
                    <div className="col-md-12 mb-4"></div>
                    <div className="col-md-6" style={{backgroundColor:'#07224e',color:'#3b97ff',padding:'10px 0px'}}>VOLCANO</div>
                    {this.seatsPrice()}
    								<div className="col-md-12" style={{padding:'0px'}}>
    									<table className="table table-bordered">
    										<thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
    											<th style={{borderColor:'#001737'}}>LEAVE HOUR</th>
    											<th style={{borderColor:'#001737'}}>BUS STATUS</th>
    										</thead>
    										<tbody style={{background:'#072c6a',color:'#3b97ff'}}>
                            {this.checkedSeat()}
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div className="col-md-1"></div>
    				</div>
    			</div>
    		</div>

    	);
	}
}
export default withTracker(() => {
  return {
     schedules: Schedules.find({from:sessionStorage.getItem('fromHome'),to:sessionStorage.getItem('toHome'),time:sessionStorage.getItem('timeHome')}).fetch(),
  };
})(Seats);