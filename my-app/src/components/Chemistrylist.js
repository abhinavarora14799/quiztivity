import React from 'react'
import styled from 'styled-components'
import {
    NavLink as Link
  } from 'react-router-dom';

import chem1 from '../images/Chem1.png'
import chem2 from '../images/Chem2.png'
import chem3 from '../images/Chem3.png'

import chemback from '../images/back3.gif'

function Chemistrylist() {
  return (
    <div>        
    <Sect>
    <img src = {chemback} alt="math" width="130" height="130"></img>
    Welcome to Chemistry!<img src = {chemback} alt="math" width="130" height="130"></img><br/><br/>Pick your level of difficulty below to get started

        <Button to='/Chemistryquiz'><img src = {chem1} alt="math" width="250" height="250"></img></Button>
         <Button  to='/Chemistryquiz2'><img src = {chem2} alt="math" width="250" height="250"></img></Button>
        <Button  to='/Chemistryquiz3'><img src = {chem3} alt="math" width="250" height="250"></img></Button>
    </Sect>
    
    </div>
  )
}

export default Chemistrylist



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








