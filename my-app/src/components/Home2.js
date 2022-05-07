import React from 'react'
import styled from 'styled-components'
import mathpic from '../images/planetMath.png'
import physicpic from '../images/planetPhysics.png'
import chemistrypic from '../images/planetChem.png'
import computersciencepic from '../images/planetCS.png'
import character from '../images/starGif.gif'

import { Link } from 'react-router-dom';
function Home2() {
  return (
<Box2>
    <Box3>
    <img src = {character} alt="math" width="300" height="300"/> <br/>
    <BigText> Welcome to the Quiztivity Universe!<br/> Please choose your destination planet below. <br/><br/></BigText>
    </Box3>
    <Boxs>
		 <Link to ='/Math'>
         <BoxBtn>
        <img src = {mathpic} alt="math" width="350" height="350"/>
         </BoxBtn>
		 </Link>
		 <Link to ='/Physics'>
         <BoxBtn>
		<img src = {physicpic} alt="math" width="350" height="350"/>
         </BoxBtn>
		 </Link>
		 <Link to ='/Chemistry'>
         <BoxBtn>
		 <img src = {chemistrypic} alt="math" width="350" height="350"/>
         </BoxBtn>
		 </Link>
		 <Link to ='/Computer'>
         <BoxBtn>
		 <img src = {computersciencepic} alt="math" width="350" height="350"/>
         </BoxBtn>
		 </Link>
     </Boxs>
</Box2>
     

  )
}

export default Home2;


export const Img = styled.img`
    margin-right: 3em;
`

export const BigText = styled.p`
    font-size: 45px;
    color: yellow;
    font-weight: bold;
`;

export const SmallText = styled.p`
    font-size: 15px;
    color: white;
`;

export const Box2 = styled.div`
display:flex;
flex-direction: column;
`;

export const Boxs = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-evenly;
  
    height: 500px;
    width: 100%;
`;
export const Box3 = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-left: 8em;
`;

export const BoxBtn = styled.nav `
  display: flex;

  align-text: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  }
`;



