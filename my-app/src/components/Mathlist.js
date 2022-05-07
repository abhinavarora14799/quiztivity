import React from 'react'
import styled from 'styled-components'
import {
    NavLink as Link
  } from 'react-router-dom';
import { Img } from './Home2';

import Math1 from '../images/Math1.png'
import Math2 from '../images/Math2.png'
import Math3 from '../images/Math3.png'

import mathback from '../images/back2.gif'

function Mathlist() {
  return (
    <div>        
    <Sect>
    <img src = {mathback} alt="math" width="130" height="130"></img>
    Welcome to Math!<img src = {mathback} alt="math" width="130" height="130"></img><br/><br/>Pick your level of difficulty below to get started

        <Button to='/Mathquiz'><img src = {Math1} alt="math" width="250" height="250"></img></Button>
         <Button  to='/Mathquiz2'><img src = {Math2} alt="math" width="250" height="250"></img></Button>
        <Button  to='/Mathquiz3'><img src = {Math3} alt="math" width="250" height="250"></img></Button>
    </Sect>
    
    </div>
  )
}

export default Mathlist



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








