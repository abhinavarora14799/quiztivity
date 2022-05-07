import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Physics() {
  const questions = [
		{
			questionText: 'When an unbalanced force acts on an object, the force ___________________________?',
			answerOptions: [
				{ answerText: 'changes the motion of the object ', isCorrect: false },
				{ answerText: 'is cancelled by another force ', isCorrect: false },
				{ answerText: 'does not change the motion of the object', isCorrect: true },
				{ answerText: 'is equal to the weight of the object ', isCorrect: false },
			],
		},
		{
			questionText: 'What do you call the process of vaporization that occurs throughout a liquid?',
			answerOptions: [
				{ answerText: 'sublimation ', isCorrect: false },
				{ answerText: 'vaporization ', isCorrect: true },
				{ answerText: 'plasma ', isCorrect: false },
				{ answerText: 'boiling', isCorrect: false },
			],
		},
		{
			questionText: 'Matter is pulled to the ground by what?',
			answerOptions: [
				{ answerText: 'Gravity', isCorrect: true },
				{ answerText: 'Space', isCorrect: false },
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'the moon', isCorrect: false },
			],
		},
		{
			questionText: 'Gravity and friction are two kinds of what?',
			answerOptions: [
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'forces', isCorrect: true },
				{ answerText: 'masses', isCorrect: false },
				{ answerText: 'foods', isCorrect: false },
			],
		},
    {
			questionText: 'The force of attraction between any two objects that have mass is what?',
			answerOptions: [
				{ answerText: 'energy', isCorrect: false },
				{ answerText: 'gravity', isCorrect: true },
				{ answerText: 'friction', isCorrect: false },
				{ answerText: 'speed', isCorrect: false },
			],
			questionText: 'This is when gas matter loses thermal energy and converts to a liquid form.',
			answerOptions: [
				{ answerText: 'evaporation ', isCorrect: false },
				{ answerText: 'sublimation', isCorrect: false },
				{ answerText: 'gassification', isCorrect: true },
				{ answerText: 'californication', isCorrect: false },
			],
		},
		{
			questionText: 'This is the process of changing liquid matter into solid matter.',
			answerOptions: [
				{ answerText: 'freezing', isCorrect: false },
				{ answerText: 'condensation', isCorrect: true },
				{ answerText: 'plasma ', isCorrect: false },
				{ answerText: 'boiling', isCorrect: false },
			],
		},
		{
			questionText: 'Physics is the study of',
			answerOptions: [
				{ answerText: 'Gravity', isCorrect: true },
				{ answerText: 'matter', isCorrect: false },
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'the moon', isCorrect: false },
			],
		},
		{
			questionText: 'This is the amount of space that matter takes up.',
			answerOptions: [
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'volume', isCorrect: true },
				{ answerText: 'masses', isCorrect: false },
				{ answerText: 'foods', isCorrect: false },
			],
		},
    {
			questionText: 'This is the basic unit of matter.',
			answerOptions: [
				{ answerText: 'energy', isCorrect: false },
				{ answerText: 'atom', isCorrect: true },
				{ answerText: 'ion', isCorrect: false },
				{ answerText: 'speed', isCorrect: false },
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