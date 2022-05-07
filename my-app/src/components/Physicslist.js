import React from 'react'
import styled from 'styled-components'
import {
    NavLink as Link
  } from 'react-router-dom';

import phy1 from '../images/Phy1.png'
import phy2 from '../images/Phy2.png'
import phy3 from '../images/Phy3.png'

import phyback from '../images/back4.gif'

function Physicslist() {
  return (
    <div>        
    <Sect>
    <img src = {phyback} alt="math" width="130" height="130"></img>
      Welcome to Physics!<img src = {phyback} alt="math" width="130" height="130"></img><br/><br/>Pick your level of difficulty below to get started
      
        <Button to='/Physicsquiz'><img src = {phy1} alt="math" width="250" height="250"></img></Button>
         <Button  to='/Physicsquiz2'><img src = {phy2} alt="math" width="250" height="250"></img></Button>
        <Button  to='/Physicsquiz3'><img src = {phy3} alt="math" width="250" height="250"></img></Button>
    </Sect>
    
    </div>
  )
}

export default Physicslist



const Sect = styled.section`

padding-left: 100px;
`

const A = styled.a`
font-size: 20px;
    color: white;
    text-decoration: none;
`;

const Button = styled(Link)`

padding: 10px 24px; /* Some padding */
cursor: pointer; /* Pointer/hand icon */
width: 200px; /* Set a width if needed */
display: block; /* Make the buttons appear below each other */

};
`








