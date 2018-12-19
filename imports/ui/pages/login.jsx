import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
export default class Login extends React.Component {
	onsubmit(e){
		e.preventDefault();
		var el = $(e.target);

		var username = el.find("#username").val();
		var password = el.find("#password").val();

		Meteor.loginWithPassword(username, password, function(er){
			if(er){
				alert(er.reason);
			}
			else{
				alert("successfully logged in");
				sessionStorage.setItem("username", username);
				window.open("/","_self");
			}
		});
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
						<h2 className="text-center padigo">LOG IN</h2>
						<form onSubmit={this.onsubmit}>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-user"></i>
									</div>
								</div>
								<input type="text" className="form-control rounded-0" id="username" placeholder="Username" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
							</div>
							<div className="input-group">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-key"></i>
									</div>
								</div>
								<input type="password" className="form-control rounded-0" id="password" placeholder="Password" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
							</div>
							<button className="btn padibt" style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'30px',padding:'0px',borderRadius:'20px'}}> Log In</button>
						</form>
						<a className="btn padibtn" href='/create' style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'30px',padding:'0px',borderRadius:'20px'}}>Create account</a>
						<a className="btn adminbtn" href='/admin' style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'30px',padding:'0px',borderRadius:'20px'}}>Admin</a>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
    	);
	}
}