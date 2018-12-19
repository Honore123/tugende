import React from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Myticket} from '../../api/User.js';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import Ticket from '../components/ticket.jsx';


class Mywallet extends React.Component {

  renderTickets() {
       let filteredTasks = this.props.myticket;

    return filteredTasks.map((myticket) => (
      <Ticket key={myticket._id} myticket={myticket} />
    ));
  }

  render() {
    return (
<div>
	<Header />
		<Header2 />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6"></div>
					<div className="col-md-5 text-center" style={{background:'#001737',color:'#0177fe'}}>
						<h2 className="text-center padigo">MY TICKET</h2>
						<table className="table table-bordered">
							<thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
								<tr>
									<th style={{borderColor:'#001737'}}>Names</th>
									<th style={{borderColor:'#001737'}}>Agency</th>
									<th style={{borderColor:'#001737'}}>Seats</th>
									<th style={{borderColor:'#001737'}}>Date</th>
									<th style={{borderColor:'#001737'}}>Time</th>
									<th style={{borderColor:'#001737'}}>Status</th>
								</tr>
							</thead>
							<tbody style={{background:'#072c6a',color:'#3b97ff'}}>
								{this.renderTickets()}
							</tbody>
						</table>
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
     myticket: Myticket.find({name: sessionStorage.getItem('username')},{ sort: { date: -1 } }).fetch(),
     currentUser: Meteor.user(),
  };
})(Mywallet);