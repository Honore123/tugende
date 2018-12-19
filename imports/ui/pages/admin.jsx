import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
export default class Admin extends React.Component {
	onsubmit(e){
		e.preventDefault();
		var el = $(e.target);
		var busoperator = el.find("#busoperator").val();
		var operatorName = el.find("#operatorName").val();
		var number = el.find("#number").val();
		var password = el.find("#password").val();

		if (busoperator=="volcano" && operatorName=="tugende" && number=="123" && password=="amajyambere") {
			alert("logged successfully");
			window.open("/adminport","_self");
		}
		else{
			alert("failed to login");
		}
		
	}
  render() {
    return (
<div style={{backgroundColor:'#B9C5D6'}}>
	<ul className="nav nav-pills nav-fill backnav">
		<li className="nav-item">
			<a className="nav-link" href="#"><img src={'tugende.png'} style={{height:'50px'}}/></a>
		</li>
	</ul>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-8" style={{color:'#0177fe'}}>
				<h2 className="text-center" style={{marginTop:'300px'}}>Welcome on tugende admin portal</h2>
			</div>
			<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
				<h2 className="text-center padigo">LOG IN</h2>
				<form onSubmit={this.onsubmit.bind(this)}>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								<i className="fa fa-bus"></i>
							</div>
						</div>
						<input type="text" className="form-control rounded-0" id="busoperator" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
					</div>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								<i className="fa fa-user"></i>
							</div>
						</div>
						<input type="text" className="form-control rounded-0" id="operatorName" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
					</div>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								<i className="">123</i>
							</div>
						</div>
						<input type="text" className="form-control rounded-0" id="number" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
					</div>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								<i className="fa fa-key"></i>
							</div>
						</div>
						<input type="password" className="form-control rounded-0" id="password" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
					</div>
					<button type="submit" className="btn adminlog" style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'26px',padding:'0px',borderRadius:'20px'}}> Log In</button>
				</form>
			</div>
			<div className="col-md-1"></div>
		</div>
	</div>
</div>
    	);
	}
}