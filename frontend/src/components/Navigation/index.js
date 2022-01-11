import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Demo from './Demo';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to ='/spots/host'>Host a Cabin</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink id='signup' to="/signup">Sign Up</NavLink>
        <Demo />
      </>
    );
  }

  return (
    <div className='navbar'>
      <div className='left-nav'>
        <div id='home'>
          <NavLink exact to="/">Home</NavLink>
        </div>
      </div>
      <div className='mid-nav'>
      </div>
      <div className='right-nav'>
        <div id='signup-login'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
