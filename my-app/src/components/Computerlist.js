import React from 'react'
import styled from 'styled-components'
import {
    NavLink as Link
  } from 'react-router-dom';

import cs1 from '../images/cs1.png'
import cs2 from '../images/cs2.png'
import cs3 from '../images/cs3.png'

import csback from '../images/back1.gif'

function Computerlist() {
  return (
    <div>        
    <Sect>
    <img src = {csback} alt="math" width="130" height="130"></img>
    Welcome to Computer Science!<img src = {csback} alt="math" width="130" height="130"></img><br/><br/>Pick your level of difficulty below to get started

        <Button to='/Computerquiz'><img src = {cs1} alt="math" width="250" height="250"></img></Button>
         <Button  to='/Computerquiz2'><img src = {cs2} alt="math" width="250" height="250"></img></Button>
        <Button  to='/Computerquiz3'><img src = {cs3} alt="math" width="250" height="250"></img></Button>
    </Sect>
    
    </div>
  )
}

export default Computerlist



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








