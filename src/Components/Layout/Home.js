import React, { Component } from 'react';
import TopNavBar from './TopNavbar';
import LeftNavBar from './LeftNavbar';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../Content/Main/Dashboard';
import Order from '../Content/Main/Order';
import Hisory from '../Content/Main/History';
import Notifications from '../Content/Main/Notifications';
import Settings from '../Content/Main/Settings';
import './Home.css'

const leftNavItems = [{
  path:'/home',
  exact: true,
  component: Dashboard,
  title: 'Home'
}, {
  path: '/home/order',
  exact: null,
  component: Order,
  title: 'Order'
}, {
  path: '/home/history',
  exact: null,
  component: Hisory,
  title: 'History'
}, {
  path: '/home/notifications',
  exact: null,
  component: Notifications,
  title: 'Notifications'
}, {
  path: '/home/settings',
  exact: null,
  component: Settings,
  title: 'Settings'
}]

class Home extends Component {
  constructor(props) {
    super(props);
    let { auth } = props;
    this.state = {
      auth: auth.isAuthenticated
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.auth.logout(() => {
      this.setState({auth: false});
    });
  }
  
  render() {
    if (!this.state.auth) return <Redirect to='/login' />;

    return (
        
          <div className='home-body-container'>
           <TopNavBar logoutAction={this.logout} />
            <div className='home-left-navbar-container'>
              <LeftNavBar barItems={leftNavItems}/>
            </div>
            <div className='home-body-content-container'>
              {leftNavItems.map( item => 
                <Route 
                  key={item.path}
                  path={item.path}
                  exact={item.exact} 
                  component={item.component}/>)
              }
            </div>
          </div>
          
      )
  }
};

export default Home;