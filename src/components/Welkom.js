import React from 'react';
import './App.css';
import Menu from './menu';
import { TEKSTEN } from './teksten';


class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			teksten: TEKSTEN
		};
	}	
	render(){
		return (
			<div className='App'>				
				<Menu teksten={this.state.teksten} />				
			</div>
		);
	}
}
export default App;
