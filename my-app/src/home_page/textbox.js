import styled from 'styled-components'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import useSound from 'use-Sound';
// import PlayButton from 'use-sound';



function Textbox() {
    return ( 
        <Boxs>

            <Container>
                <TextContainer>
                    <BigText>Our Mission</BigText>
                    <SmallText>A modernistic quizzing environment for students</SmallText>
                </TextContainer>
                <BoxBtn><BoxBtnLink to='/signup'>Create an account</BoxBtnLink></BoxBtn>
            </Container>
            
            <Img src={require('../../../my-app/src/images/Image1.png')}></Img>
        </Boxs>


    )
}
// function Demo() {
// 	const soundUrl = '/sounds/guitar-loop.mp3';
  
// 	const [play, { stop, isPlaying }] = useSound(soundUrl);
  
// 	return (
// 	  <PlayButton
// 		active={isPlaying}
// 		size={60}
// 		iconColor="var(--color-background)"
// 		idleBackgroundColor="var(--color-text)"
// 		activeBackgroundColor="var(--color-primary)"
// 		play={play}
// 		stop={stop}
// 	  />
// 	);
//   }

export default Textbox

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
    justify-content: space-between;
    background-color: #212121;
    height: 500px;
    width: 70%;
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
  align-items: center;
  }
`;

export const BoxBtnLink = styled(Link)
`
  border-radius: 25px;
  width: 17em;
  background: #4EAB7F;
  padding: 15px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  font-weight: bold;
  text-align:center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;