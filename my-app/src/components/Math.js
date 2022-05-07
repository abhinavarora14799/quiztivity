import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Math() {
  const questions = [
		{
			questionText: 'Question 1: \nAdd negative numbers: −8 + 3 = ?',
			answerOptions: [
				{ answerText: '-11', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '-5', isCorrect: true },
				{ answerText: '-3', isCorrect: false },
			],
		},
		{
			questionText: 'Question 2: \nWhich is the correct interpretation of the expression 4 − (−3)?',
			answerOptions: [
				{ answerText: 'Start at -3 on the number line and move 4 to the right', isCorrect: false },
				{ answerText: 'Start at 4 on the number line and move 3 to the right', isCorrect: true },
				{ answerText: 'Start at 4 on the number line and move 4 to the left', isCorrect: false },
				{ answerText: 'Start at 4 on the number line and move 3 to the left', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nWhat is the sign of -1042 + 1042?',
			answerOptions: [
				{ answerText: 'Neither positive nor negative because the sum is zero', isCorrect: true },
				{ answerText: 'Positive', isCorrect: false },
				{ answerText: 'Negative', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Question 4: \nWrite the following percent as a decimal: 727%',
			answerOptions: [
				{ answerText: '72.7', isCorrect: false },
				{ answerText: '727', isCorrect: false },
				{ answerText: '0.727', isCorrect: false },
				{ answerText: '7.27', isCorrect: true },
			],
		},
    {
			questionText: 'Question 5: \nJane was rock climbing. At one point, she stopped and climbed straight down 8 meters.Then she climbed straight up 16 meters. Which of the following equations matches the situation above?',
			answerOptions: [
				{ answerText: '-8 - 16 = ?', isCorrect: false },
				{ answerText: '-8 + 16 = ?', isCorrect: true },
				{ answerText: '-16 + 8 = ?', isCorrect: false },
				{ answerText: '8 - 16 = ?', isCorrect: false },
			],
		},
    {
			questionText: 'Question 6: \nWrite the following decimal as a percent: 6.16',
			answerOptions: [
				{ answerText: '6.16%', isCorrect: false },
				{ answerText: '616%', isCorrect: true },
				{ answerText: '0.616%', isCorrect: false },
				{ answerText: '61.6%', isCorrect: false },
			],
		},
    {
			questionText: 'Question 7: \nWhich of the following will equal -56 as the answer?',
			answerOptions: [
				{ answerText: '98-42', isCorrect: false },
				{ answerText: '42+98', isCorrect: false },
				{ answerText: '-42-98', isCorrect: false },
				{ answerText: '42+(-98)', isCorrect: true },
			],
		},
    {
			questionText: 'Question 8: \nCalculate the percentage: 90%  of  100',
			answerOptions: [
				{ answerText: '90', isCorrect: true },
				{ answerText: '9', isCorrect: false },
				{ answerText: '100', isCorrect: false },
				{ answerText: '10', isCorrect: false },
			],
		},
    {
			questionText: 'Question 9: \nHow many percent of 100 is 25?',
			answerOptions: [
				{ answerText: '25 is 75%  of  100', isCorrect: false },
				{ answerText: '100 is 25%  of  100', isCorrect: false },
				{ answerText: '25 is 25%  of  100', isCorrect: true },
				{ answerText: '100 is 25%  of  25', isCorrect: false },
			],
		},
    {
			questionText: 'Question 10: \nA group of preschoolers has 5 boys and 3 girls. What is the ratio of girls to boys?',
			answerOptions: [
				{ answerText: '5 : 5', isCorrect: false },
				{ answerText: '3 : 5', isCorrect: true },
				{ answerText: '5 : 3', isCorrect: false },
				{ answerText: '3 : 3', isCorrect: false },
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