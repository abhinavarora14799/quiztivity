import React from 'react'
import styled from 'styled-components'
import mathpic from '../images/mathpic.jpeg'
import physicpic from '../images/physicspic.png'
import chemistrypic from '../images/chemistrypic.jpeg'
import computersciencepic from '../images/computersciencepic.png'
import { Link } from 'react-router-dom';
function Home2() {
  return (
	  <><BigText> Welcome to Quzitivity !<br/> Please Choose the Subject you would like to Master.	</BigText>
	  <Boxs>
		  <Link to='/Math'>
			  <BoxBtn>
				  <img src={mathpic} alt="math" width="250" height="250" />
			  </BoxBtn>
		  </Link>
		  <Link to='/Physics'>
			  <BoxBtn>
				  <img src={physicpic} alt="math" width="250" height="250" />
			  </BoxBtn>
		  </Link>
		  <Link to='/Chemistry'>
			  <BoxBtn>
				  <img src={chemistrypic} alt="math" width="250" height="250" />
			  </BoxBtn>
		  </Link>
		  <Link to='/Computer%20Science'>
			  <BoxBtn>
				  <img src={computersciencepic} alt="math" width="250" height="250" />
			  </BoxBtn>
		  </Link>
	  </Boxs></>

  )
}

export default Home2;


export const Img = styled.img`
    margin-right: 3em;
`

export const BigText = styled.p`
    font-size: 45px;
    color: white;
    font-weight: bold;
`;

export const SmallText = styled.p`
    font-size: 15px;
    color: white;
`;

export const Boxs = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #212121;
    height: 500px;
    width: 90%;
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
  background-color: white;
  align-text: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  }
`;



