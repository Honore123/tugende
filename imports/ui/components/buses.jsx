import React from 'react';
import { NavLink } from 'react-router-dom';
import Editmode from '../components/editmode.jsx';
export default class Buses extends React.Component {
   constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick(props) {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let content;

    if (isLoggedIn) {
      content =  <div className="container-fluid">
          <div className="row">
            <table className="table table-bordered" style={{margin:'0px'}}>
              <thead>
                <tr>
                  <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>FROM</th>
                  <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>TO</th>
                  <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>TIME</th>
                  <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>SEATS</th>
                  <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>PRICE</th>
                  <th className="text-center" style={{backgroundColor:'#001123',color:'#1160BA'}}><i className="fa fa-gear"></i> SETTINGS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MUHANGA</td>
                  <td style={{backgroundColor:'#001123',color:'#008CFF'}}>KIGALI</td>
                  <td>13:30</td>
                  <td>29</td>
                  <td>1030</td>
                  <td><button className="btn btn-success" onClick={this.handleLogoutClick}><i className="fa fa-ok"></i> Ok</button></td>
                </tr>
              </tbody>
          </table>
          <div className="col-md-12" style={{padding:'0px'}}>
            <Editmode/>
          </div>
        </div>
       </div>
      
    } else {
      content = <div className="container-fluid">
        <div className="row">
          <table className="table table-bordered" style={{margin:'0px'}}>
            <thead>
              <tr>
                <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>FROM</th>
                <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>TO</th>
                <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>TIME</th>
                <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>SEATS</th>
                <th scope="col" style={{backgroundColor:'#001123',color:'#1160BA'}}>PRICE</th>
                <th className="text-center" style={{backgroundColor:'#001123',color:'#1160BA'}}><i className="fa fa-gear"></i> SETTINGS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MUHANGA</td>
                <td style={{backgroundColor:'#001123',color:'#008CFF'}}>KIGALI</td>
                <td>13:30</td>
                <td>29</td>
                <td>1030</td>
                <td><button className="btn btn-primary" onClick={this.handleLoginClick}><i className="fa fa-edit"></i> edit</button></td>
              </tr>
              <tr>
                <td>MUHANGA</td>
                <td style={{backgroundColor:'#001123',color:'#008CFF'}}>NYAMAGABE</td>
                <td>14:00</td>
                <td>20</td>
                <td>2500</td>
                <td><button className="btn btn-primary" onClick={this.handleLoginClick}><i className="fa fa-edit"></i> edit</button></td>
              </tr>
            </tbody>
          </table>
          <div className="col-md-12 btn btn-success" style={{borderRadius:'0px',color:'#001123'}}>NEW BUSES <i className="fa fa-plus"></i></div>
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
