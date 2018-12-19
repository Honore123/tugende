import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {User} from '../../api/User.js';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import CheckedTrip from '../components/checkedTrip.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Login from '../pages/login.jsx';
import Create from '../pages/CreateAccount.jsx';
import availablebus from '../pages/availablebus.jsx';
import Seats from '../pages/Seats.jsx';
import Cart from '../pages/Cart.jsx';
import Admin from '../pages/admin.jsx';
import TicketPrice from '../pages/ticketprice.jsx';
import TicketPrint from '../pages/ticketprint.jsx';
import Adminport from '../pages/adminport.jsx';
import Mywallet from '../pages/myticket.jsx';
export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route path = '/login' component={Login} />
              <Route path = '/create' component={Create} />
              <Route path = '/availablebus' component={availablebus} />
              <Route path = '/seats' component={Seats} />
              <Route path = '/cart' component={Cart} />
              <Route path = '/admin' component={Admin} />
              <Route path = '/checkedtrip' component={CheckedTrip} />
              <Route path = '/adminport' component={Adminport} />
              <Route path = '/ticketprice' component = {TicketPrice}/>
              <Route path = '/ticketprint' component = {TicketPrint}/>
              <Route path = '/myticket' component = {Mywallet}/>
            </Switch>
        </div>
      </Router>
    );
  }
}
