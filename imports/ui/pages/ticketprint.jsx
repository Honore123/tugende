import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Schedules} from '../../api/User.js';
import {User} from '../../api/User.js';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import TotalPrint from '../components/totalprint.jsx'

export default class TicketPrint extends React.Component{
  printSample(){
      var cont = this.refs.testPrinta.value;
      console.log(cont);

    }
	 Totalprint() {
   let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <TotalPrint key={schedules._id} schedules={schedules}/>
    ));
  }
	render(){
		return(
				<div>
					<Header />
            		<Header2 />
            		<div className="container-fluid">
            			<div className="row">
            				<div className="col-md-8"></div>
            				<div className="col-md-3 text-center" style={{height:'100%',background:'#001737',color:'#0177fe'}}>
            					<div className="container-fluid">
            						<div className="row" style={{paddingTop:'50px'}}>
            							<div className="col-md-12"><img src={'tugende.png'} style={{height:'30px',marginBottom:'42px'}}/></div>
            							<div ref="testPrinta">
                            {this.Totalprint()}
                          </div>
            							<div className="col-md-12 mb-4 mt-4">
            								<div className="container-fluid" style={{padding:'0px'}}>
	            								<div className="row">
	        										<button className="col-md-5 btn" onClick={this.printSample.bind(this)} style={{background:'#05112B',color:'#0177FE',borderRadius:'18px'}}>Print Ticket</button>
	        										<div className="col-md-2"></div>
	        										<button className="col-md-5 btn" style={{background:'#05112B',color:'#0177FE',borderRadius:'18px'}}>Cancel</button>
	            								</div>
	            							</div>
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
})(TicketPrint);