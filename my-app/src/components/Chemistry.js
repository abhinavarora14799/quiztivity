import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Chemistry() {
  const questions = [
		{
			questionText: 'A household cleaner has a pH around 10. It would be considered a what?',
			answerOptions: [
				{ answerText: 'A base', isCorrect: false },
				{ answerText: 'An acid', isCorrect: false },
				{ answerText: 'A neutral', isCorrect: true },
				{ answerText: 'A liquid', isCorrect: false },
			],
		},
		{
			questionText: 'The cell organelle where photosynthesis takes place is the what?',
			answerOptions: [
				{ answerText: 'cell well', isCorrect: false },
				{ answerText: 'nucleaus', isCorrect: true },
				{ answerText: 'vacuole', isCorrect: false },
				{ answerText: 'chloroplast', isCorrect: false },
			],
		},
		{
			questionText: 'What is the maximum amount of a solute that can be dissolved in a given amount of solvent at a given temperature.',
			answerOptions: [
				{ answerText: 'supersaturation', isCorrect: true },
				{ answerText: 'concentration', isCorrect: false },
				{ answerText: 'solubility', isCorrect: false },
				{ answerText: 'polarity', isCorrect: false },
			],
		},
		{
			questionText: 'The temperature in which a solid can turn into a liquid is known as the what?',
			answerOptions: [
				{ answerText: 'turning point', isCorrect: false },
				{ answerText: 'melting point', isCorrect: true },
				{ answerText: 'boiling point', isCorrect: false },
				{ answerText: 'evaporation', isCorrect: false },
			],
		},
    {
			questionText: 'A ? is the substance being dissolved in a solution',
			answerOptions: [
				{ answerText: 'solute', isCorrect: false },
				{ answerText: 'solvent', isCorrect: true },
				{ answerText: 'substrate', isCorrect: false },
				{ answerText: 'insolvent', isCorrect: false },
			],
			questionText: 'I can easily compress the water in a jar to reduce its volume.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'When water evaporates, it turns into solid.',
			answerOptions: [
				{ answerText: 'true', isCorrect: false },
				{ answerText: 'false', isCorrect: true },
			],
		},
		{
			questionText: 'Water expands in all directions to take the shape of the container it is in.',
			answerOptions: [
				{ answerText: 'true', isCorrect: true },
				{ answerText: 'false', isCorrect: false },
			],
		},
		{
			questionText: 'The conversion of matter from solid state to liquid state is called ',
			answerOptions: [
				{ answerText: 'Vaporization.', isCorrect: false },
				{ answerText: 'melting point', isCorrect: true },
				{ answerText: 'Melting', isCorrect: false },
				{ answerText: 'evaporation', isCorrect: false },
			],
		},
    {
			questionText: 'Which of the following does not take the shape of the container it is in?',
			answerOptions: [
				{ answerText: 'water', isCorrect: false },
				{ answerText: 'solvent', isCorrect: true },
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'lead', isCorrect: false },
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

export default Chemistry;



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