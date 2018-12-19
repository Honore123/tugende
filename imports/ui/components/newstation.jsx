import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Station} from '../../api/User.js';
import {Schedules} from '../../api/User.js';
import {Stationline} from '../../api/User.js';
import Stationshome from './stationHome.jsx';

class Newstation extends React.Component {
   constructor(props) {
   super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  timeSaver(e){
    e.preventDefault();
    var dateCustom = this.refs.datepicker.value;
    var date = new Date();
    var min = date.getMinutes();
    var hour = date.getHours();
    alert(dateCustom + " now " + hour + ":" + min);
    var d1 = Date.parse("2012-11-01 " + dateCustom);
  var d2 = Date.parse("2012-11-01 " + hour + ":" + min);
  if (d1 < d2) {
      alert ("Error!");
  }else{
    alert("success");
  }

  }
  checkNum(){
      
    
     global.allChecked="";
     
     if(document.getElementById("monday").checked){
global.allChecked=global.allChecked+"-monday";

     }if(document.getElementById("tuesday").checked){
global.allChecked=global.allChecked+"-tuesday";

     }if(document.getElementById("wednesday").checked){
global.allChecked=global.allChecked+"-wednesday";
      
     }if(document.getElementById("thursday").checked){
     global.allChecked=global.allChecked+"-thursday";
      
     }if(document.getElementById("friday").checked){
global.allChecked=global.allChecked+"-friday";
      
     }if(document.getElementById("saturday").checked){

      global.allChecked=global.allChecked+"-saturday";
     }if(document.getElementById("sunday").checked){

      global.allChecked=global.allChecked+"-sunday";
     }
 

     alert(global.allChecked);


  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});

  }
   renderStationHome() {
       let filteredTasks = this.props.station;

    return filteredTasks.map((station) => (
      <Stationshome key={station._id} station={station} />
    ));
  }
  saveInterval(){
    var fromStation = this.refs.from.value;
    var toStation = this.refs.to.value;
    var seatNoBus = this.refs.seatsNo.value;
    var priceTrip = this.refs.priceNo.value;
    var startingTime = this.refs.startime.value;
    var endingTime = this.refs.endtime.value;
    var timingInterv = this.refs.timeInterv.value;
    var temp_endTime = "";
    var output = "";
    var i = 0;
    Stationline.insert({
        from: fromStation,
        to: toStation,
        date: "Everyday",
        time: "30",
        seats: seatNoBus,
        price: priceTrip,
      },(er)=>{
        if (er) {
          alert(er.reason);
        }
      });
    while(!temp_endTime.includes(endingTime)){
      var startingTimeMin = startingTime.split(":")[1];
      var startingTimeHour = startingTime.split(":")[0];
      var hourAfter = startingTimeHour;
      var minutesAfter = parseInt(startingTimeMin) + parseInt(timingInterv);
      if (minutesAfter >= 60) {
        hourAfter =  parseInt(startingTimeHour) + 1;
        minutesAfter = parseInt(minutesAfter) - 60;
      }else{
        hourAfter = hourAfter;
      }
      temp_endTime = hourAfter + ":" + ((parseInt(minutesAfter)==0)? "00": minutesAfter);
      if (output == "") {
        output = startingTime + " to " + temp_endTime;

      }else{
          output =output + "---" + startingTime + " to " + temp_endTime + " ";
      }
      Schedules.insert({
        from: fromStation,
        to: toStation,
        date: "Everyday",
        time: startingTime,
        seats: seatNoBus,
        price: priceTrip,
      },(er)=>{
        if (er) {
          alert(er.reason);
        }
      });
      startingTime = temp_endTime;
      if (i > 10) {
        
      }
      i++;
    }
    alert(output);

  }
  handleLogoutClick() {
    
  }
  addStation(e){
    e.preventDefault();
    var name = ReactDOM.findDOMNode(this.refs.stationame).value.trim();
    if (name) {
         Station.insert({
      name,
      createdAt: new Date(),
    },(er)=>{
      if (er) {
        alert(er.reason);
      }
      else{
        alert("data has been inserted");
        ReactDOM.findDOMNode(this.refs.stationame).value = "";
      }
    });
    }
    else{
      alert("No data inserted");
    }

  }
  render() {
  	const isLoggedIn = this.state.isLoggedIn;
    let content;

    if (isLoggedIn) {
      content = <div className="container-fluid">
          <div className="row">
          	<div className="col-md-5" style={{padding:'0px'}}>
          		<div className="input-group mb-1" style={{padding:'0 10px 10px 10px',border:'1px solid #10AF3C'}}>
				  <label className="form-check-label" htmlFor="examplecheckboxs3">
                  	MUSANZE
                  </label>
				</div>
          	</div>
          	<div className="col-md-7"></div>
          	<div className="col-md-5" style={{padding:'0px'}}>
          		<div className="input-group mb-1" style={{padding:'0 10px 10px 10px',border:'1px solid #10AF3C'}}>
				  <label className="form-check-label" htmlFor="examplecheckboxs3">
                  	KIGALI
                  </label>
				</div>
          	</div>
          	<div className="col-md-7"></div>
          	<table className="table table-bordered" style={{margin:'0px'}}>
              <tbody>
                <tr>
                  <td style={{color:'#7290A7',borderColor:'#10AF3C'}}>
                    <select className="custom-select" id="inputGroupSelect01" ref="from">
                      <option defaultValue>Choose...</option>
                      {this.renderStationHome()}
                    </select>
                  </td>
                  <td style={{backgroundColor:'#11BA3E',color:'#B9C5D6',borderColor:'#10AF3C'}}>
                    <select className="custom-select" id="inputGroupSelect01" ref="to">
                      <option defaultValue>Choose...</option>
                      {this.renderStationHome()}
                    </select>
                  </td>
                  <td style={{borderColor:'#10AF3C'}}>Everyday</td>
                  <td style={{borderColor:'#10AF3C'}}>15</td>
                  <td style={{borderColor:'#10AF3C'}}>
                    <input type="number" className="form-control" ref="seatsNo" id="startime" placeholder="No of Seats" style={{width:"50%"}}/>
                  </td>
                  <td style={{borderColor:'#10AF3C',paddingRight:'0px'}}>
                    <input type="number" className="form-control" ref="priceNo" id="startime" placeholder="Price" style={{width:"50%",marginRight:'0px'}}/>
                  </td>
                  <td className="btn btn-danger" style={{width:'100%',borderRadius:'0px',borderColor:'#10AF3C'}} onClick={this.handleLogoutClick}><i className="fa fa-times"></i></td>
                </tr>
              </tbody>
          	</table>
            <div className="col-md-4">
            </div>
            <div className="col-md-2">
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="option1" />
                <label className="form-check-label" htmlFor="examplecheckboxs1">
                  Everyday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs2" value="option2"/>
                <label className="form-check-label" htmlFor="examplecheckboxs2">
                  Days intervals
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="monday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Monday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="tuesday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Tuesday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="wednesday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Wednesday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="thursday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Thursday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="friday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Friday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="saturday" value="option3" />
                <label className="form-check-label" htmlFor="examplecheckboxs3">
                  Saturday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input myDays" type="checkbox" name="examplecheckboxs" id="sunday" value="option3" />
                <label className="form-check-label" htmlFor="-examplecheckboxs3">
                  Sunday
                </label>
              </div>
            </div>
            <div className="col-md-2">
                <div className="form-group">
                  <label for="exampleInputEmail1">Start Time</label>
                  <input type="time" className="form-control" ref="startime" id="startime"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">End Time</label>
                  <input type="time" className="form-control" ref="endtime" id="endtime"/>
                </div>
                <div className="form-check mb-3" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs12" value="option12" />
                  <label className="form-check-label" htmlFor="examplecheckboxs1">
                    Time intervals
                  </label>
                </div>
                <div className="form-group">
                  <select id="inputState" className="form-control" ref="timeInterv" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option defaultValue>Choose...</option>
                    <option>30</option>
                    <option>15</option>
                  </select>
                </div>
                <div className="input-group mb-1">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs12" value="option12" />
                  <label className="form-check-label" htmlFor="examplecheckboxs1">
                    Fixed time
                  </label>
                </div>
                <div className="form-check mb-3" style={{marginTop:'5px'}}>
                  <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs12" value="option12" />
                  <label className="form-check-label" htmlFor="examplecheckboxs1">
                    Once a day
                  </label>
                </div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check mb-3" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs12" value="option12" />
                  <label className="form-check-label" htmlFor="examplecheckboxs1">
                    Multiple time
                  </label>
                </div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check mb-3 text-center" style={{marginTop:'10px'}}>
                  <label className="form-check-label" htmlFor="examplecheckboxs1">
                    Add time <i className="fa fa-plus-circle"></i>
                  </label>
                </div>
                <button className="col-md-12 btn btn-success" onClick={this.saveInterval.bind(this)}>POST</button>
            </div>
            <div className="col-md-4"></div>
        </div>
       </div>
      
    } else {
      content = 
<div className="container-fluid">
  <div className="row">
    <div className="col-md-5 mr-1" style={{padding:'0px'}}>
      <div className="input-group mb-1" style={{padding:'0 10px 10px 10px',border:'2px solid #10AF3C'}}>
        <input type="text" className="form-control" ref="stationame" style={{backgroundColor:'#B9C5D6',borderStyle:'none',borderRadius:'0px',borderBottom:'1px solid #10AF3C'}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
    </div>
    <button className="col-md-2 btn btn-success mb-1" onClick={this.addStation.bind(this)} style={{borderRadius:'0px',color:'#001123'}}>DONE</button>
    <div className="col-md-4"></div>
    <div className="col-md-5" style={{padding:'0px'}}>
      <div className="input-group mb-1" style={{padding:'0 10px 10px 10px',border:'2px solid #10AF3C'}}>
        <input type="text" className="form-control" style={{backgroundColor:'#B9C5D6',borderStyle:'none',borderRadius:'0px',borderBottom:'1px solid #10AF3C'}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
    </div>
    <button className="col-md-2 btn btn-success ml-1 mb-1" onClick={this.handleLoginClick} style={{borderRadius:'0px',color:'#001123'}}>SCHEDULES <i className="fa fa-plus-circle"></i></button>
    <div className="col-md-4"></div>
    <button className="col-md-7 btn btn-success" style={{borderRadius:'0px',color:'#001123'}}>ADD ANOTHER DESTINATION <i className="fa fa-plus-circle"></i></button>
  </div>
</div>
    }
    return (
      <div>
      	{content}
      </div>
    );
  }
}
export default withTracker(() => {
  return {
     station: Station.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Newstation);