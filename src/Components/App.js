import React from 'react';
import TopNavbar from './Layout/TopNavbar';
import LeftNavBar from './Layout/LeftNavbar';
import Home from './Content/Home';
import Jobs from './Content/Jobs';
import Workers from './Content/Workers';
import Payment from './Content/Payment';
import Settings from './Content/Settings';
import LogIn from './Content/LogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  if (typeof props === 'undefined') {
    return <LogIn />
  }
   const { userLoggedIn } = props;

  return (
    <Router>
      { userLoggedIn ? 
      <>
        <TopNavbar />
        <LeftNavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/workers" component={Workers} />
            <Route path="/payments" component={Payment} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </>:
      <LogIn /> }
    </Router>
 )
}

const mapStateToProps = state => { 
  console.log("app state: " + JSON.stringify(state));
  return { 
    userLoggedIn: state.userLoggedIn 
  }
};

export default connect(mapStateToProps)(App);