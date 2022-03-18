import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Demo from './Demo';
import LoginFormModal from '../../context/LoginFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink id='host-a-cabin-home' to ='/spots/host'>Host a Cabin</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/login">Log In</NavLink> */}
        <LoginFormModal />
        <NavLink id='signup' to="/signup">Sign Up</NavLink>
        <Demo />
      </>
    );
  }

  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <NavLink exact to='/'><i id='CabinGo-Logo' class="fab fa-airbnb"><span id='cabingo-word'> Cabin Go</span></i></NavLink>
      </div>
      <div className='right-nav'>
        <NavLink id='home-home' exact to="/">Home</NavLink>
        <NavLink id='home-home' exact to='/spots'>Explore</NavLink>
        <div id='signup-login'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
