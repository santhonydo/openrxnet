import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../Components/Content/WelcomePage';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Layout/Home';

const fakeAuth = {
    isAuthenticated: false, 
    authenticate (cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AppRoute = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/login' render={ props => <Auth {...props} auth={fakeAuth} />} />
          <Route path='/home' render={ props => <Home {...props} auth={fakeAuth}/>} />
        </Switch>
      </Router>
    )

}

export default AppRoute;