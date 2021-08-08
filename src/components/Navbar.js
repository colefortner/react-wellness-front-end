import React from 'react';
import { NavLink } from 'react-router-dom';

  
const Navbar = () => {
  return (
    
      <div>
        <div>
          <NavLink to='/' exact activeStyle>
            Home
          </NavLink>
          <NavLink to='/dashboard' activeStyle>
            Dashboard
          </NavLink>
          <NavLink to='/foods' activeStyle>
            Foods
          </NavLink>
          <NavLink to='/daily_data' activeStyle>
            Daily Data
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </div>
        <div>
          <button to='/signin'>Sign In</button>
        </div>
      </div>
    
  );
};
  
export default Navbar;