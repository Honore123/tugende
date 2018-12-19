import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Schedules} from '../../api/User.js';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import CartFrom from '../components/cartfrom.jsx'
import CartTo from '../components/cartto.jsx'
import CartHour from '../components/carthour.jsx'
import CartDate from '../components/cartedate.jsx'
class Cart extends React.Component {
    dateCart(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        var datecart = day +"-"+ month +"-"+ year;

        return datecart;
    }
    TicketPrice(){
      var cartSeats = ReactDOM.findDOMNode(this.refs.totalSeat).value.trim();
      if (cartSeats > 0) {
        sessionStorage.setItem("cartSeats", cartSeats);
        window.open("/ticketprice","_self");
      }else{
        alert("Please add number of seats");
      }
    }
    cartFrom() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CartFrom key={schedules._id} schedules={schedules} />
    ));
  }
    cartTo() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CartTo key={schedules._id} schedules={schedules} />
    ));
  }
    cartDate() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CartDate key={schedules._id} schedules={schedules} />
    ));
  }
    cartHour() {
       let filteredTasks = this.props.schedules;

    return filteredTasks.map((schedules) => (
      <CartHour key={schedules._id} schedules={schedules} />
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
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-location-arrow"></i>  From:</div>
    								{this.cartFrom()}
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-map-marker"></i>  To:</div>
    								{this.cartTo()}
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-calendar"></i>  Date:</div>
    								<div className="col-md-6 text-left mb-3 bor">{this.dateCart()}</div>
                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-university"></i>  Bus Operator:</div>
                    <div className="col-md-6 text-left mb-3 bor">VOLCANO</div>
                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-clock-o"></i>  Hour:</div>
                    {this.cartHour()}
                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-calendar"></i>  Number of Seats:</div>
                    <input type="number" ref="totalSeat" className="col-md-6 text-left mb-3 bor"/>
                    <a className="col-md-12 btn padibtn2" href='/'>Book</a>
                    <a className="col-md-12 btn padibtn3" onClick={this.TicketPrice.bind(this)} href='#'>Buy</a>
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
})(Cart);