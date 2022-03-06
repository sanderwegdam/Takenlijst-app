import React from 'react';

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
	
	render(){
		return(
			<div>
				<h1>Welkom bij {this.state.val}</h1>
				<button type="button" onClick={this.changeValue}>Klik hier</button>
			</div>
		);
	}
}

export default Greet;