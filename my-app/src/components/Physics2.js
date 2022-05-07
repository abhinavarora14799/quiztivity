import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Physics() {
  const questions = [
		{
			questionText: 'what are forces measured in?',
			answerOptions: [
				{ answerText: 'kilometers', isCorrect: false },
				{ answerText: 'miles', isCorrect: false },
				{ answerText: 'newtons', isCorrect: true },
				{ answerText: 'tons', isCorrect: false },
			],
		},
		{
			questionText: 'What is an example of a force?',
			answerOptions: [
				{ answerText: 'a push', isCorrect: false },
				{ answerText: 'all of these', isCorrect: true },
				{ answerText: 'a pull', isCorrect: false },
				{ answerText: 'a twist', isCorrect: false },
			],
		},
		{
			questionText: 'What is friction?',
			answerOptions: [
				{ answerText: 'resists flowing', isCorrect: true },
				{ answerText: 'takes shape of container', isCorrect: false },
				{ answerText: 'forms droplets', isCorrect: false },
				{ answerText: 'none of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which object would have the most friction?',
			answerOptions: [
				{ answerText: 'carpet', isCorrect: false },
				{ answerText: 'speed', isCorrect: true },
				{ answerText: 'sandpaper', isCorrect: false },
				{ answerText: 'velocity', isCorrect: false },
			],
		},
    {
			questionText: 'A force is a what?',
			answerOptions: [
				{ answerText: 'energy', isCorrect: false },
				{ answerText: 'constant speed', isCorrect: true },
				{ answerText: 'linear quanitity', isCorrect: false },
				{ answerText: 'speed', isCorrect: false },
			],
			questionText: 'when Is an unbalanced force shown?',
			answerOptions: [
				{ answerText: 'start moving', isCorrect: false },
				{ answerText: 'stop moving', isCorrect: false },
				{ answerText: 'slow down', isCorrect: true },
				{ answerText: 'changes direction', isCorrect: false },
			],
		},
		{
			questionText: 'What is Gravity?',
			answerOptions: [
				{ answerText: 'a fruit', isCorrect: false },
				{ answerText: 'a planet', isCorrect: true },
				{ answerText: 'Something that keeps you on the ground', isCorrect: false },
				{ answerText: 'from outside to inside. ', isCorrect: false },
			],
		},
		{
			questionText: 'The measure of how quickly something moves or the distance it moves in a given amount of time is called',
			answerOptions: [
				{ answerText: 'motion', isCorrect: true },
				{ answerText: 'speed', isCorrect: false },
				{ answerText: 'position', isCorrect: false },
				{ answerText: 'location', isCorrect: false },
			],
		},
		{
			questionText: 'The unit speed is measured in is',
			answerOptions: [
				{ answerText: 'm/s', isCorrect: false },
				{ answerText: 'm/hr', isCorrect: true },
				{ answerText: 'ft/min', isCorrect: false },
				{ answerText: 'velocity', isCorrect: false },
			],
		},
    {
			questionText: ' Speed is equal to the distance divided by',
			answerOptions: [
				{ answerText: 'energy', isCorrect: false },
				{ answerText: 'postion', isCorrect: true },
				{ answerText: 'linear quanitity', isCorrect: false },
				{ answerText: 'height', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Physics;



// export const Container = styled.div`
// color: white;
// background-color: #504C4C;
// border-radius: 10px;
// border-style: solid;
// border-width: 5px;
// border-color: #b1b2b4;
// box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
// width: 600px;
// overflow: hidden;
// `;

// export const Header = styled.div`
// padding: 4rem;
// `;

// export const Header1 = styled.h1`
// padding-right: 80px;
// vertical-align:middle;
// color: white;
// letter-spacing: 3px;
// `;

// export const Header2 = styled.h2`
// padding: 1rem;
// text-align: center;
// margin: 0;
// `;

// export const Header3 = styled.h3`
// padding-right: 80px;
// color: #3ad87c;
// cursor: pointer;
// `;

// export const Ul = styled.ul`
// list-style-type: none;
// padding: 0;
// font-size: 1.2rem;
// margin: 1rem 0;
// `


// export const NavBtnLink = styled.button
// `
// background-color: #03cae4;
// color: #fff;
// border: none;
// display: block;
// width: 100%;
// cursor: pointer;
// font-size: 1.1rem;
// font-family: inherit;
// padding: 1.3rem;
//   &:hover {
//     background-color: #04adc4;
//   };
//   &:focus{
//     outline: none;
//     background-color: #3ad87c;
//   };
// `;