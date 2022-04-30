import {
  FaBars
} from 'react-icons/fa';
import {
  NavLink as Link
} from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav `
  background: #504C4C;
  background-image: linear-gradient(315deg, #504C4C 0%, #263a3a 100%);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1200px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  font-size: 18px;
  width: 100%;
`;

export const Logo = styled.nav`
display:flex;
color: #97979C;
align-items: center;
font-size: 40px;
font-weight: bold;
`

export const NavLink = styled(Link)
`
  color: #97979C;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    height: 50%;
    border-radius: 40px;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  };
`;

export const Bars = styled(FaBars)
`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
  border-radius: 20px;
  background: #F6F6F6;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;