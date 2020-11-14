import React from 'react';
import Logo from '../../images/icon.svg';
import '../../App.css';
import {
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
  } from "reactstrap";

const Header = () => {
    return (
        <Navbar className="bg-danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <div className="row align-items-center">
                <img src={Logo} alt="Smart Dhopa" /> <span className="lead mx-1">Smart Dhopa</span> 
              </div>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-danger"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
              <span className="navbar-toggler-bar bar4"></span>
              <span className="navbar-toggler-bar bar5"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-danger">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" >
                  <i className="now-ui-icons shopping_shop"></i>
                  <p className="nav-name">Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <i className="now-ui-icons loader_gear spin"></i>
                  <p className="nav-name">Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <i className="now-ui-icons shopping_bag-16"></i>
                  <p className="nav-name">Bag  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <i className="now-ui-icons objects_spaceship"></i>
                  <p className="nav-name">Dashboard</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <i className="now-ui-icons users_single-02"></i>
                  <p className="nav-name">Login</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    );
};

export default Header;