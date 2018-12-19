import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {Schedules} from '../../api/User.js';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import Home from './Home.jsx';
import CheckedTrip from '../components/checkedTrip.jsx'
import AvailableFrom from '../components/availablefrom.jsx'
import AvailableTo from '../components/availableTo.jsx'
import AvailableHour from '../components/availableHour.jsx'
import AvailableDate from '../components/availableDate.jsx'

class availablebus extends React.Component {
    componentDidMount(){
        global.fromHomeDat = sessionStorage.getItem('fromHome');
        global.toHomeDat = sessionStorage.getItem('toHome');
        global.timeHomeDat = sessionStorage.getItem('timeHome');
    }
      dateAvailable(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var datecart = day +"-"+ month +"-"+ year;

        return datecart;
    }
    checkBusAv(){
        alert(global.fromHomeDat +" "+ global.toHomeDat +" "+ global.timeHomeDat);
        console.log(this.props.schedules);
    }
     renderSchedules() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CheckedTrip key={schedules._id} schedules={schedules} />
    ));
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
    availableHour() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <AvailableHour key={schedules._id} schedules={schedules} />
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
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>From:</div>
    								{this.availableFrom()}
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>To:</div>
    								{this.availableTo()}
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Date:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>{this.dateAvailable()}</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Hour:</div>
    								{this.availableHour()}
    								<div className="col-md-12" style={{padding:'0px',marginTop:'20px'}}>
    									<table className="table table-bordered">
    										<thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
    											<th style={{borderColor:'#001737'}}>DESTINATION</th>
    											<th style={{borderColor:'#001737'}}>AGENCY</th>
    											<th style={{borderColor:'#001737'}}>FARE</th>
    										</thead>
    										<tbody style={{background:'#072c6a',color:'#3b97ff'}}>
    											{this.renderSchedules()}
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    						<a className="btn padibtn1" href='/' style={{background:' #061533',color:'#0177fe',width:'204px',height:'26px',padding:'0px',border:'1px solid #072860'}}>CHECK FOR OTHER BUSES</a>
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
})(availablebus);