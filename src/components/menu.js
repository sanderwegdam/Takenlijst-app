import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

class Menu extends React.Component {
	constructor(props){
		super(props);		
		this.state = {};
	}
	
	render(){
		
		const Menu = this.props.teksten.map((teksten) => {
			return(
				<div key={teksten.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object src={teksten.afbeelding} alt={teksten.naam} />
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{Menu}
					</Media>
				</div>
			</div>
		);
	}
}

export default Menu;