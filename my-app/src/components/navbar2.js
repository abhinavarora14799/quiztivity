import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from '../home_page/NavElements.js';
import PlaySound from './sound';
const Navbar2 = (props) => {
  const functionHandler = () => {
    props.passChildData("FALSE");
    };
  return (
    <>
      <Nav>
        <Bars />
        <Logo>Quiztivity</Logo>
        <NavMenu>
          <NavLink to='/Home2' activestyle ="true">
            Home
          </NavLink>
          <NavLink to='/Math'  activestyle ="true">
            Math
          </NavLink>
          <NavLink to='/Physics'  activestyle ="true">
            Physics
          </NavLink>
          <NavLink to='/Chemistry'  activestyle ="true">
            Chemistry
          </NavLink>
          <NavLink to='/Computer'  activestyle ="true">
            Computer Science
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {
           <NavBtnLink to='/Home' onClick={functionHandler}>Log out</NavBtnLink>
        /* <NavBtn>
         
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn> */}
        <PlaySound/>
      </Nav>
    </>
  );
};
  
export default Navbar2;