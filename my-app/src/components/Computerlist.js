import React from 'react'
import styled from 'styled-components'
import {
    NavLink as Link
  } from 'react-router-dom';

function Computerlist() {
  return (
    <div>        
    <Sect>
        <Button to='/Computerquiz'>Level 1 - Beginner</Button>
         <Button  to='/Computerquiz2'>Level 2 - Average</Button>
        <Button  to='/Computerquiz3'>Level 3 - Expert</Button>
    </Sect>
    
    </div>
  )
}

export default Computerlist



const Sect = styled.section`
padding-top: 60px;
padding-left: 100px;
`

const A = styled.a`
font-size: 20px;
    color: white;
    text-decoration: none;
`;

const Button = styled(Link)`
background-color: #18a370; /* Green background */
border: 1px solid rgb(40, 82, 40); /* Green border */
color: white; /* White text */
padding: 10px 24px; /* Some padding */
cursor: pointer; /* Pointer/hand icon */
width: 200px; /* Set a width if needed */
display: block; /* Make the buttons appear below each other */
&:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
  };
&:hover {
    background-color: #4b7767;
};
`








