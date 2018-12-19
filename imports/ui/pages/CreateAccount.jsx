import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
export default class Create extends React.Component {
	onsubmit(e){
		e.preventDefault();
		var ele = $(e.target);

		var email = ele.find("#email").val();
		var phone = ele.find("#phonenumber").val();
		var username = ele.find("#username").val();
		var password = ele.find("#password").val();

		if(email && phone && username && password){
			var accountInfo={
				username: username,
				email: email,
				password: password,
				profile:{phone: phone}
			};
			Accounts.createUser(accountInfo, function(er){
				if(er){
					alert("failed to insert data");
				}
				else{
					alert("successfully logged in");
					window.open("/","_self");
				}
			});
		}
		else{
			alert("no data to insert");
		}
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
						<h2 className="text-center padigo">CREATE ACCOUNT</h2>
						<form onSubmit={this.onsubmit}>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-envelope"></i>
									</div>
								</div>
								<input type="email" className="form-control rounded-0" id="email" placeholder="Email" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-phone"></i>
									</div>
								</div>
								<input type="text" className="form-control rounded-0" id="phonenumber" placeholder="Phone-number" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-user"></i>
									</div>
								</div>
								<input type="text" className="form-control rounded-0" id="username" placeholder="Username" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
							</div>
							<div className="input-group">
								<div className="input-group-prepend">
									<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
										<i className="fa fa-key"></i>
									</div>
								</div>
								<input type="password" className="form-control rounded-0" id="password" placeholder="Password" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
							</div>
							<button type="submit" className="btn padibt" style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'26px',padding:'0px',borderRadius:'20px'}}>Create</button>
						</form>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
    	);
}
}