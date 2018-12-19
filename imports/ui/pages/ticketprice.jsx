import React from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Schedules} from '../../api/User.js';
import {Myticket} from '../../api/User.js';
import ReactDOM from 'react-dom';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import TotalPrice from '../components/totalprice.jsx'

class TicketPrice extends React.Component{
   Totalprice() {
   let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <TotalPrice key={schedules._id} schedules={schedules}/>
    ));
  }

  handleTicket(){
    
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var datecart = day +"-"+ month +"-"+ year;
    
    if (this.props.currentUser) {

      Myticket.insert(
      {
        name: this.props.currentUser.username,
        agency: "Volcano",
        seats: sessionStorage.getItem('cartSeats'),
        date: datecart,
        time: sessionStorage.getItem('timeHome'),
      },(er)=>{
        if (er) {
        alert(er.reason);
      }
      }
      );
      var restSeats = sessionStorage.getItem('totalSeats') - sessionStorage.getItem('cartSeats');
      if (restSeats >= 0) {
        Schedules.update(sessionStorage.getItem('selectorSeat'),{
          $set: {seats: restSeats},
        });
        window.open("/ticketprint","_self");
      }else {
        alert("Number of seats unavialable");
      }
    }else{
      alert("Please login to continue!!");
    }
    
  }

	render(){
		return(
			<div>
				<Header />
            	<Header2 />
            	<div className = "container-fluid" style={{height:'100%'}}>
            		<div className="row">
            			<div className="col-md-8"></div>
            			<div className="col-md-3 text-center" style={{height:'100%',background:'#001737',color:'#0177fe'}}>
            				<div className="container-fluid">
            					<div className="row" style={{paddingTop:'50px'}}>
            						<div className="col-md-12"><img src={'tugende.png'} style={{height:'30px',marginBottom:'42px'}}/></div>
            						<div className="col-md-12" style={{fontSize:'23px', margin:'30px 0px 50px 0px'}}>PAY YOUR TICKET</div>
            						{this.Totalprice()}
        							<div className="col-md-12 input-group mb-2 mt-2" style={{padding:'0px'}}>
									  <div className="input-group-prepend">
									    <i className="input-group-text fa fa-user-circle" id="basic-addon1"  style={{background:'#092D6A',color:'#0177FE',borderColor:'#092D6A',borderRadius:'20px 0px 0px 20px'}}></i>
									  </div>
									  <input type="text" className="form-control" placeholder="Account Number" aria-label="Account Number" aria-describedby="basic-addon1" style={{background:'#092D6A',color:'#0177FE',borderColor:'#092D6A',borderRadius:'0px 20px 20px 0px'}}/>
									</div>
            						<div className="col-md-12 input-group mb-3" style={{padding:'0px'}}>
									  <div className="input-group-prepend">
									    <i className="input-group-text fa fa-key" style={{background:'#092D6A',color:'#0177FE',borderColor:'#092D6A',borderRadius:'20px 0px 0px 20px'}} id="basic-addon1"></i>
									  </div>
									  <input type="text" className="form-control" placeholder="Pin" aria-label="Username" aria-describedby="basic-addon1" style={{background:'#092D6A',color:'#0177FE',borderColor:'#092D6A',borderRadius:'0px 20px 20px 0px'}}/>
									</div>
            						<a className="col-md-12 btn padibtn4" onClick={this.handleTicket.bind(this)}>Pay</a>
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
     currentUser: Meteor.user(),
  };
})(TicketPrice);