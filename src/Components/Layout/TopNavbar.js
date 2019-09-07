import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class TopNavbar extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutAction()
  }
  render(){
    return (
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#">
          <img alt="" src="/log.svg" width="30" height="30" />
          {'Project X'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Button variant='link' style={{margin: 0}}onClick={() => this.logout()}>Logout</Button>
        </Navbar.Collapse>
      </Navbar>  
    );
  }
};

export default TopNavbar;