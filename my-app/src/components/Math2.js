import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Math() {
  const questions = [
		{
			questionText: 'Question 1: \nSolve in the correct order: 7 * (3 – 1)^2 = ?',
			answerOptions: [
				{ answerText: '21', isCorrect: false },
				{ answerText: '28', isCorrect: true },
				{ answerText: '-15', isCorrect: false },
				{ answerText: '-21', isCorrect: false },
			],
		},
		{
			questionText: 'Question 2: \nSolve and find a: 2–2a=10',
			answerOptions: [
				{ answerText: 'a = 2', isCorrect: false },
				{ answerText: 'a = -4', isCorrect: true },
				{ answerText: 'a = -9', isCorrect: false },
				{ answerText: 'a = 12', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nA van moves with a constant speed of 48 miles per hour. How far can it travel in 2 hours 40 minutes?',
			answerOptions: [
				{ answerText: 'It can travel 256 miles in 2 hours 40 minutes', isCorrect: false },
				{ answerText: 'It can travel 428 miles in 2 hours 40 minutes', isCorrect: false },
				{ answerText: 'It can travel 174 miles in 2 hours 40 minutes', isCorrect: false },
				{ answerText: 'It can travel 128 miles in 2 hours 40 minutes', isCorrect: true },
			],
		},
		{
			questionText: 'Question 4: \nSolve: 506055/1000000',
			answerOptions: [
				{ answerText: '506055', isCorrect: false },
				{ answerText: '0.506055', isCorrect: true },
				{ answerText: '50605500000', isCorrect: false },
				{ answerText: '506055000000', isCorrect: false },
			],
		},
		{
			questionText: 'Question 5: \nSolve and find z: 11=11–5z',
			answerOptions: [
				{ answerText: 'z = 0', isCorrect: true },
				{ answerText: 'z = -11', isCorrect: false },
				{ answerText: 'z = 6', isCorrect: false },
				{ answerText: 'z = -6', isCorrect: false },
			],
		},
		{
			questionText: 'Question 6: \nConvert fraction to decimal using long division: 65/23',
			answerOptions: [
				{ answerText: '8.232', isCorrect: false },
				{ answerText: '2.463', isCorrect: false },
				{ answerText: '2.826', isCorrect: true },
				{ answerText: '8.685', isCorrect: false },
			],
		},
		{
			questionText: 'Question 7: \nWhat is 3 to the power of 3?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '27', isCorrect: true },
			],
		},
		{
			questionText: 'Question 8: \nNoah rides his bike with a constant speed of 6 miles per hour. How far can he travel in 3 (1/12) hours?',
			answerOptions: [
				{ answerText: 'He can travel 18.5 miles in 3 (1/12) hours.', isCorrect: true },
				{ answerText: 'He can travel 24 miles in 3 (1/12) hours.', isCorrect: false },
				{ answerText: 'He can travel 23.8 miles in 3 (1/12) hours.', isCorrect: false },
				{ answerText: 'He can travel 12 miles in 3 (1/12) hours.', isCorrect: false },
			],
		},
		{
			questionText: 'Question 9: \nWhat is 12 to the power of 2?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '122', isCorrect: false },
				{ answerText: '144', isCorrect: true },
				{ answerText: '24', isCorrect: false },
			],
		},
		{
			questionText: 'Question 10: \nLeyla eats three fifths (3/5) of a candy bar. What percent of the candy bar does she eat?',
			answerOptions: [
				{ answerText: '60%', isCorrect: true },
				{ answerText: '30%', isCorrect: false },
				{ answerText: '50%', isCorrect: false },
				{ answerText: '166%', isCorrect: false },
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

export default Math;



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