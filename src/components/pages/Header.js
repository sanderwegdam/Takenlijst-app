import React from 'react';
import '../.././App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {		
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Takenlijst</NavbarBrand>
					</div>
				</Navbar>
			</div>
		);
	}
}

export default Header;