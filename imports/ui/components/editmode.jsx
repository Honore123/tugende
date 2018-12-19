import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Editmode extends React.Component {
  constructor(props) {
   super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let content;

    if (isLoggedIn) {
      content = <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label className="form-check-label" for="exampleRadios1">
                  Everyday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label className="form-check-label" for="exampleRadios2">
                  Days intervals
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Monday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Tuesday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Wednesday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Thursday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Friday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Saturday
                </label>
              </div>
              <div className="form-check" style={{marginTop:'10px'}}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                  Sunday
                </label>
              </div>
            </div>
            <div className="col-md-2">
                <div className="form-check mb-3" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="option12" checked/>
                  <label className="form-check-label" for="exampleRadios1">
                    Time intervals
                  </label>
                </div>
                <div className="form-group">
                  <select id="inputState" className="form-control" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="input-group mb-1">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="option12" checked/>
                  <label className="form-check-label" for="exampleRadios1">
                    Fixed time
                  </label>
                </div>
                <div className="form-check mb-3" style={{marginTop:'5px'}}>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="option12" disabled/>
                  <label className="form-check-label" for="exampleRadios1">
                    Once a day
                  </label>
                </div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check mb-3" style={{marginTop:'10px'}}>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="option12" disabled/>
                  <label className="form-check-label" for="exampleRadios1">
                    Multiple time
                  </label>
                </div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'#B9C5D6',borderRadius:'20px',border:'1px solid #001123'}}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-check mb-3 text-center" style={{marginTop:'10px'}}>
                  <label className="form-check-label" for="exampleRadios1">
                    Add time <i className="fa fa-plus-circle"></i>
                  </label>
                </div>
                <button className="col-md-12 btn btn-success" onClick={this.handleLogoutClick}>POST</button>
            </div>
            <div className="col-md-4"></div>
        </div>
       </div>
      
    } else {
      content = <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-4 btn" onClick={this.handleLoginClick} style={{backgroundColor:'#001123',color:'#1160BA',borderRadius:'0px',borderRight:'2px solid #B9C5D6'}}>EDIT INFORMATION</div>
          <div className="col-md-4 btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#001123',color:'#1160BA',borderRadius:'0px',borderRight:'2px solid #B9C5D6'}}>EDIT PARTICULAR SCHEDULES</div>
          <div className="col-md-4 btn" style={{backgroundColor:'#C90000',color:'#001B3A',borderRadius:'0px',borderLeft:'2px solid #B9C5D6'}}>DELETE BUS LINE</div>
          <div className="col-md-4"></div>
          <div className="col-md-4 collapse" id="collapseExample" style={{padding:'0px'}}>
            <table className="table table-bordered">
              <thead style={{background:'#11BA3E',color:'#001737'}}>
                <th style={{borderColor:'#001737'}}>EDIT SINGLE</th>
                <th style={{borderColor:'#001737'}}>EDIT ALL</th>
              </thead>
              <thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
                <th style={{borderColor:'#001737'}}>LEAVE HOUR</th>
                <th style={{borderColor:'#001737'}}>BUS STATUS</th>
              </thead>
              <tbody style={{background:'#072c6a',color:'#3b97ff'}}>
                <tr>
                  <td style={{borderColor:'#001737'}}>05:15 AM</td>
                  <td style={{borderColor:'#001737'}}>Left</td>
                </tr>
                <tr>
                  <td style={{borderColor:'#001737'}}>05:30 AM</td>
                  <td style={{borderColor:'#001737'}}>Left</td>
                </tr>
                <tr>
                  <td style={{borderColor:'#001737'}}>06:30 AM</td>
                  <td style={{borderColor:'#001737'}}>4 Seats</td>
                </tr>
                <tr style={{backgroundColor:'#bb0033',color:'#ffffff'}}>
                  <td style={{borderColor:'#001737'}}>07:00 AM</td>
                  <td style={{borderColor:'#001737'}}>Full</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4"></div>
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

