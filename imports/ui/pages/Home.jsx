import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {Station} from '../../api/User.js';
import {Schedules} from '../../api/User.js';
import classNames from 'classnames';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import Stationshome from '../components/stationHome.jsx';
import availablebus from './availablebus.jsx';
class Home extends React.Component{

  checkBusAv(e){
    e.preventDefault();
    global.fromHome = ReactDOM.findDOMNode(this.refs.from).value.trim();
    global.toHome = ReactDOM.findDOMNode(this.refs.to).value.trim();
    global.timeHome = ReactDOM.findDOMNode(this.refs.time).value.trim();

    if (fromHome != "Choose..." && toHome != "Choose..." && timeHome) {

      sessionStorage.setItem("fromHome", fromHome);
      sessionStorage.setItem("toHome", toHome);
      sessionStorage.setItem("timeHome", timeHome);
      let trip = Schedules.find({from: fromHome,to: toHome,time: timeHome}).fetch();
      if (trip[0]) {
        window.open("/availablebus","_self");
      }else {
        alert("Not found");
      }
    }else{
      alert("please fill the from");
    }
  }

  renderStationHome() {
       let filteredTasks = this.props.station;

    return filteredTasks.map((station) => (
      <Stationshome key={station._id} station={station} />
    ));
  }
  render() {
  return (
<div>
  <Header />
    <Header2 />
      <div className="container-fluid">
        <div className="row justify-content-center rowp" id="home" style ={{background:'#001129',}}>
          <form className="form-inline">
            <div className="input-group mr-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01"  style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-location-arrow"></i> From:</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" ref="from"  style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}>
                <option defaultValue>Choose...</option>
                {this.renderStationHome()}
              </select>
            </div>
            <div className="input-group mr-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-map-marker"></i> To:</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" ref="to" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}>
                <option defaultValue>Choose...</option>
                {this.renderStationHome()}
              </select>
            </div>
            <div className="input-group mr-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-calendar"></i> Date</label>
              </div>
              <input type="date" className="form-control" ref="date" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}/>
            </div>
            <div className="input-group mr-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-clock-o"></i> Hour</label>
              </div>
              <input type="time" className="form-control" ref="time" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}/>
            </div>
            <a className="btn"  href="#" onClick={this.checkBusAv.bind(this)} style ={{background:'#1160ba',color:'#0f1d3b',border:'#001129'}}>Check bus</a>
          </form>
        </div>
      </div>
      <div className="container-fluid servp">
        <div className="row">
          <div className="col-md-12 text-center" id="services" style ={{background:'#012240',color:'#2f7fd8'}}><h3>SERVICES</h3></div>
          <div className="col-md-12 text-center logp" style ={{color:'#2f7fd8'}}><img src={'tugende.png'} style={{width:'300px',}}/></div>
          <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>CHECK</h5>
            <p>By a simple tap, check the bus availability at more than one bus operators anywhere and at anytime.</p>
          </div>
          <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>COMPARE</h5>
            <p> At more than one bus operators scroll down, compare and choose on  your convinience and save money and time.</p>
          </div>
          <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>BOOK</h5>
            <p> By logging into your created account, Tugende allows you to book and buy your ticket any place and anytime.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid aboutp">
        <div className="row">
          <div className="col-md-12 text-center" id="about" style ={{background:'#012240',color:'#2f7fd8'}}><h3>ABOUT US</h3></div>
          <div className="col-md-12 padu"></div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5> DIVINE MARTINE UMUHIRE</h5>
            <p>Team's Hustler</p>
            <p>a student at Kepler University Program.</p>
            <p>Persuing Management in lofistics and operation.</p>
            <p>Interested in learning new things</p>
          </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>MUTAMULIZA JENNIFER</h5>
            <p>Team's Hustler</p>
            <p> a student at IPRC Kicukiro doing Information Technology.</p>
            <p> Interested in inspiring young women</p>
          </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>MUCYO KANYANKORE ARNAUD</h5>
            <p>Team's Hacker</p>
            <p> A student at CBE in business Information Technology.</p>
            <p>Interested in Traditional dance.</p>
          </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>PATRICK KUBWIMANA</h5>
            <p>Team's Hipster</p>
            <p>A student in CST in architecture</p>
            <p>Passionate about modern techonology</p>
            <p>and high tech designs with an experience on smart cities.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid aboutp">
        <div className="row justify-content-md-center">
          <div className="col-md-12 text-center" id="contact" style ={{background:'#012240',color:'#2f7fd8'}}><h3>CONTACT</h3></div>
          <div className="col-md-12 padi"></div>
          <div className="col-md-12 text-center" style ={{color:'#2f7fd8'}}><p>For more information reach out here</p></div>
          <div className="col-md-12 text-center" style ={{color:'#2f7fd8'}}><p>We value your opinion than anything else</p></div>
          <div className="col-md-7" style ={{color:'#2f7fd8'}}>
            <textarea className="form-control" aria-label="With textarea" style ={{background:'#031d39',color:'#0177fe',border:'1px solid #0090ff',height:'209px'}} placeholder="your message...."></textarea>
          </div>
          <div className="col-md-7 mt-4" style ={{color:'#2f7fd8'}}>
            <form className="form-inline">
              <input type="email" className="form-control" style ={{background:'#031d39',color:'#0177fe',border:'1px solid #0090ff',width:'500px'}} placeholder="Your email..."/>
              <button className="btn ml-3" style ={{background:'#1160ba',color:'#0f1d3b',border:'#001129',padding:'7px 50px'}}>SEND</button>
              <h5 className="padicon"><i className="fa fa-facebook-official"></i></h5>
              <h5 className="padicon"><i className="fa fa-envelope"></i></h5>
              <h5 className="padicon"><i className="fa fa-twitter-square"></i></h5>
              <h5 className="padicon"><i className="fa fa-instagram"></i></h5>
            </form>
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
})(Home);
