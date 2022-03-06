import React, { useState } from "react"
import { NavbarBrand, Navbar } from 'reactstrap';
import { NavLink } from "react-router-dom"
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import Welkom from "./Welkom";

const Menu = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    }, 
    {
      id: 2,
      path: "/about",
      text: "About",
    }
  ]

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (  
    <nav className="navBar">
      
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand style={{ fontSize: "1rem", fontWeight: "100", marginBottom: "2rem", lineHeight: "1em", color: "#000", textAlign: "center" }}></NavbarBrand>
					</div>
				</Navbar>
      <button onClick={handleToggle}>
        {
          navbarOpen ? 
          <MdClose 
            style={{color: "#fff", width: "40px", height: "40px" }} 
          /> : 
          <FiMenu 
            style={{color: "#7b7b7b", width: "40px", height: "40px" }} 
          />
        }
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu": ""}`}>
        {links.map((link) => {
          return (              
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" onClick={() => closeMenu()} exact>
                {link.text}
              </NavLink>               
            </li>
          )
        })}
      </ul>
    </nav>
  )  
}
export default Menu

