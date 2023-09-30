/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // eslint-disable-next-line no-unused-vars
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

function Navbarr(props)  {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >

      <NavbarBrand> <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>TextUtils</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>

            <NavLink><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">HOME</Link></NavLink>
            
            </NavItem>
            <NavItem>
            <NavLink><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">ABOUT</Link></NavLink>
              
                
                
                
             
            </NavItem>
            
          </Nav>
          <div className={`form-check form-switch ms-auto text-${props.mode=='dark'?'light':'light'}`}>
          <input className="form-check-input"onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
            </div>
        </Collapse>

              
      </Navbar>
    </div>
  );
}

export default Navbarr;
