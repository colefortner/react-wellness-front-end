import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
  
const Navbar = props => {
  let visible = false;
  if(props.loggedInStatus === 'LOGGED_IN'){
    visible = true;
  } else {
    visible = false;
  }
  return (
      <div>
        <div className='navbar'>
          <div className='nav-home'>
            <NavLink to='/' exact activeStyle>
              Home
            </NavLink>
          </div>
          <div className='nav-links'>
            {visible && <NavLink to='/dashboard' activeStyle>
              Dashboard
            </NavLink>}
          </div>
          <div className='nav-links'>
            {visible && <NavLink to='/foods' activeStyle>
             Foods
           </NavLink>}
          </div>
          {visible && <div className='nav-links'>
            <NavLink to='/daily_data' activeStyle>
              Daily Data
            </NavLink>
          </div>}
          <div>
            {visible && <p>Hi {props.firstName}!</p>}
          </div>

          {/* <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
        </div>
        <div>
          <button to='/signin'>Sign In</button>
        </div>
      </div>
    
  );
};
  
export default Navbar;