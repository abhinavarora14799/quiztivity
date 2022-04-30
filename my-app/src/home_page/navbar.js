import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from './NavElements.js';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <Logo>Quiztivity</Logo>
        <NavMenu>
          <NavLink to='/' activestyle ="true">
            Home
          </NavLink>
          <NavLink to='/'  activestyle ="true">
            Math
          </NavLink>
          <NavLink to='/'  activestyle ="true">
            Physics
          </NavLink>
          <NavLink to='/'  activestyle ="true">
            Chemistry
          </NavLink>
          <NavLink to='/'  activestyle ="true">
            Computer Sience
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;