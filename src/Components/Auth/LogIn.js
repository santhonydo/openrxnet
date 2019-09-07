import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../Actions/index';
import { connect } from 'react-redux';
import './LogIn.css';

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    
    this.logIn = this.logIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  logIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    (email && password) ? this.props.loginAction() : alert('wrong password')
  }

  handleChange({target}){
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return ( 
      <div className="login">
        <Card>
          <Card.Body>
            <Form onSubmit = {this.logIn}>
              <Form.Group controlId="email">
                <Form.Label> Email address </Form.Label> 
                <Form.Control type = "email" name = "email" placeholder = "Enter email" onChange = {this.handleChange} /> 
              </Form.Group> 
              <Form.Group controlId = "password" >
                <Form.Label> Password </Form.Label> 
                <Form.Control type = "password" name = "password" placeholder = "password" onChange = {this.handleChange} /> 
                  <NavLink to = {'/passwordReset'}> Reset password </NavLink> 
              </Form.Group>
              <Button variant = "primary" type="submit" style = {{ float: "right", margin: "auto" }}>Log In</Button> 
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => {
      dispatch(logIn(credentials))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogIn);