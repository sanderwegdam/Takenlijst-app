import React from 'react';
import './media.css';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "de Web App"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "Wegdam Media"}
			);
		}
	
	render() {
		return (
			<div className="col-12 mt-5">	
					<h1 style={{ fontSize: "1rem", fontWeight: "100", marginBottom: "2rem", lineHeight: "1em", color: "#000", textAlign: "center" }}>Welkom bij {this.state.val}</h1>
					<div style={{  margin:"0", position: "absolute", top: "50%", transform: "translateY(-50%)" }} >
					<button value="Klik Hier" onClick={this.changeValue}>Klik Hier</button></div>	
			</div>
		);
	}
}

export default Greet;