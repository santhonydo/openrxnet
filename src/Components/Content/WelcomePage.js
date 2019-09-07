import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
      <>
          <h1>Welcome to project X</h1>
          <Link to='/login'>Login</Link>
                   
      </>    
  )
}

export default WelcomePage;