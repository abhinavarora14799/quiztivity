import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Math() {
  const questions = [
		{
			questionText: 'Question 1: \nAdd the decimals together: 1.8 + 6.7 + (-3) + (-7.7) = ?',
			answerOptions: [
				{ answerText: '2.1', isCorrect: false },
				{ answerText: '2.8', isCorrect: false },
				{ answerText: '-2.2', isCorrect: true },
				{ answerText: '-2.1', isCorrect: false },
			],
		},
		{
			questionText: 'Question 2: \nA small submarine started its dive at sea level and descended 30 feet per minute. Which integer represents the submarine’s depth after seven minutes?',
			answerOptions: [
				{ answerText: '-210 feet', isCorrect: true },
				{ answerText: '-70 feet', isCorrect: false },
				{ answerText: '210 feet', isCorrect: false },
				{ answerText: '70 feet', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nWhat is the distance between the points (0, 1) and (0, 10)?',
			answerOptions: [
				{ answerText: '11 units', isCorrect: false },
				{ answerText: '9 units', isCorrect: true },
				{ answerText: '0 units', isCorrect: false },
				{ answerText: '8 units', isCorrect: false },
			],
		},
		{
			questionText: 'Question 4: \nWhat is 6.43 × 10^7 in standard notation?',
			answerOptions: [
				{ answerText: '643,000,000', isCorrect: false },
				{ answerText: '643', isCorrect: false },
				{ answerText: '6,430', isCorrect: false },
				{ answerText: '64,300,000', isCorrect: true },
			],
		},
		{
			questionText: 'Question 5: \nThe attendance at three concerts was 876, 647, and 856. Which expression shows how to estimate the total attendance at the concerts?',
			answerOptions: [
				{ answerText: '900 + 600 + 900', isCorrect: true },
				{ answerText: '800 + 600 + 800', isCorrect: false },
				{ answerText: '900 + 700 + 900', isCorrect: false },
				{ answerText: '800 + 700 + 800', isCorrect: false },
			],
		},
		{
			questionText: 'Question 6: \nWhat is 35% of 80?',
			answerOptions: [
				{ answerText: '35', isCorrect: false },
				{ answerText: '28', isCorrect: true },
				{ answerText: '80', isCorrect: false },
				{ answerText: '30', isCorrect: false },
			],
		},
		{
			questionText: 'Question 7: \nWhat is the median of the list of numbers: 35 20 30 25 20?',
			answerOptions: [
				{ answerText: '35', isCorrect: false },
				{ answerText: '25', isCorrect: true },
				{ answerText: '20', isCorrect: false },
				{ answerText: '30', isCorrect: false },
			],
		},
		{
			questionText: 'Question 8: \nThe temperature is 8° F. As a cold front moves in, the temperature drops 6° F per hour. What is the temperature at the end of 3 hours?',
			answerOptions: [
				{ answerText: '-8 degrees F', isCorrect: false },
				{ answerText: '14 degrees F', isCorrect: false },
				{ answerText: '-14 degrees F', isCorrect: false },
				{ answerText: '-10 degrees F', isCorrect: true },
			],
		},
		{
			questionText: 'Question 9: \nWhat is the value of the expression 8x – 10 when x = 5?',
			answerOptions: [
				{ answerText: '30', isCorrect: true },
				{ answerText: '12', isCorrect: false },
				{ answerText: '45', isCorrect: false },
				{ answerText: '24', isCorrect: false },
			],
		},
		{
			questionText: 'Question 10: \nWhat is the formula for the area of a circle?',
			answerOptions: [
				{ answerText: 'A = (2pi)r^2', isCorrect: false },
				{ answerText: 'A = (pi)r^3', isCorrect: false },
				{ answerText: 'A = (pi)r^2', isCorrect: true },
				{ answerText: 'A = (pi)r', isCorrect: false },
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