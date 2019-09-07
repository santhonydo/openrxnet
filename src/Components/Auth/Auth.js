import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LogIn from './LogIn';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth.isAuthenticated,
    };
    
    this.login = this.login.bind(this);
  }

  login(props) {
    this.props.auth.authenticate(() => {
      this.setState({
        auth: true
      });
    });
  }

  render() {
    let { auth } = this.state;
    return auth ?   
      <Redirect to={{ 
        pathname: '/home', 
        state: this.state.auth 
      }} /> :
      <LogIn loginAction={this.login} />
  }
}

export default Auth;