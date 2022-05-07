import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Physics() {
  const questions = [
		{
			questionText: 'The type of foce that keeps objects moving in a circle or arc.',
			answerOptions: [
				{ answerText: 'gravity', isCorrect: false },
				{ answerText: 'friction', isCorrect: false },
				{ answerText: 'does not change the motion of the object', isCorrect: true },
				{ answerText: 'is equal to the weight of the object ', isCorrect: false },
			],
		},
		{
			questionText: 'The distance covered within a certain unit of time.',
			answerOptions: [
				{ answerText: 'sublimation ', isCorrect: false },
				{ answerText: 'speed', isCorrect: true },
				{ answerText: 'plasma ', isCorrect: false },
				{ answerText: 'velocity', isCorrect: false },
			],
		},
		{
			questionText: 'The rate at which an object changes its velocity.',
			answerOptions: [
				{ answerText: 'speed', isCorrect: true },
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'the moon', isCorrect: false },
			],
		},
		{
			questionText: 'The rate at which an object is traveling in a certain direction.',
			answerOptions: [
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'forces', isCorrect: true },
				{ answerText: 'speed', isCorrect: false },
				{ answerText: 'acceleration', isCorrect: false },
			],
		},
    {
			questionText: 'The energy of motion or the energy an object has as a result of its motion.',
			answerOptions: [
				{ answerText: 'energy', isCorrect: false },
				{ answerText: 'speed', isCorrect: true },
				{ answerText: 'friction', isCorrect: false },
				{ answerText: 'kinetic', isCorrect: false },
			],
			questionText: 'The tendency of an object to remain at rest if at rest or to continue moving in a straight line if in motion.',
			answerOptions: [
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'centripedal', isCorrect: false },
				{ answerText: 'velocity', isCorrect: true },
				{ answerText: 'momentum', isCorrect: false },
			],
		},
		{
			questionText: 'A unit of measurement for force.',
			answerOptions: [
				{ answerText: 'newton', isCorrect: false },
				{ answerText: 'mass', isCorrect: true },
				{ answerText: 'gram', isCorrect: false },
				{ answerText: 'mph', isCorrect: false },
			],
		},
		{
			questionText: 'The product of an object mass and its velocity.',
			answerOptions: [
				{ answerText: 'momentum', isCorrect: true },
				{ answerText: 'force', isCorrect: false },
				{ answerText: 'mass', isCorrect: false },
				{ answerText: 'the moon', isCorrect: false },
			],
		},
		{
			questionText: 'The force of attraction that exists between two objects.',
			answerOptions: [
				{ answerText: 'inertia', isCorrect: false },
				{ answerText: 'volume', isCorrect: true },
				{ answerText: 'masses', isCorrect: false },
				{ answerText: 'gravity', isCorrect: false },
			],
		},
    {
			questionText: 'This describes an objects velocity, or speed direction.',
			answerOptions: [
				{ answerText: 'motion', isCorrect: false },
				{ answerText: 'rest', isCorrect: true },
				{ answerText: 'balance', isCorrect: false },
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