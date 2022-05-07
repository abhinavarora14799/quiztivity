import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Computer() {
  const questions = [
		{
			questionText: 'Question 1: \nWhat is another name for computer programs and information?',
			answerOptions: [
				{ answerText: 'Output', isCorrect: false },
				{ answerText: 'Process', isCorrect: false },
				{ answerText: 'Software', isCorrect: true },
				{ answerText: 'CPU', isCorrect: false },
			],
		},
		{
			questionText: 'Question 2: \nWhat is an Algorithm?',
			answerOptions: [
				{ answerText: 'A list of steps to finish a task', isCorrect: true },
				{ answerText: 'A list of random steps to complete', isCorrect: false },
				{ answerText: 'A grouped together steps', isCorrect: false },
				{ answerText: 'Bunch of numbers and equations for the computer', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nDefine a Program',
			answerOptions: [
				{ answerText: 'An application that has been coded into something that can run by a machine', isCorrect: false },
				{ answerText: 'An algorithm that has been coded into something that can be empty', isCorrect: false },
				{ answerText: 'An algorithm that has been coded into something that can run by a machine', isCorrect: true },
				{ answerText: 'An application that has nothing coded into it', isCorrect: false },
			],
		},
		{
			questionText: 'Question 4: \nWhat are bugs?',
			answerOptions: [
				{ answerText: 'Part of program that is correct', isCorrect: false },
				{ answerText: 'Part of program that does not work correctly', isCorrect: true },
				{ answerText: 'Something that is not part of program', isCorrect: false },
				{ answerText: 'Something that does not matter if the program is correct or not', isCorrect: false },
			],
		},
		{
			questionText: 'Question 5: \nWhat is Debugging?',
			answerOptions: [
				{ answerText: 'Keeping the problems in an algorithm or program', isCorrect: false },
				{ answerText: 'Opening the program to view the bugs occuring', isCorrect: false },
				{ answerText: 'Running the application on a system', isCorrect: false },
				{ answerText: 'Finding and fixing problems in an algorithm or program', isCorrect: true },
			],
		},
		{
			questionText: 'Question 6: \nWhat is a Loop?',
			answerOptions: [
				{ answerText: 'A round hoop found in a program', isCorrect: false },
				{ answerText: 'The action of doing something over and over again', isCorrect: true },
				{ answerText: 'It is something that makes the program run properly', isCorrect: false },
				{ answerText: 'Used to open an application', isCorrect: false },
			],
		},
		{
			questionText: 'Question 7: \nWhat is it called when you turn on your computer, enter your user name, and enter your password?',
			answerOptions: [
				{ answerText: 'Scripting', isCorrect: false },
				{ answerText: 'Downloading a file', isCorrect: false },
				{ answerText: 'Logging on', isCorrect: true },
				{ answerText: 'Logging off', isCorrect: false },
			],
		},
		{
			questionText: 'Question 8: \nThe instructions that tell a computer what to do. This includes system and application programs.',
			answerOptions: [
				{ answerText: 'Icon', isCorrect: false },
				{ answerText: 'Hardware', isCorrect: false },
				{ answerText: 'Central Pocessing Unit (CPU)', isCorrect: false },
				{ answerText: 'Software', isCorrect: true },
			],
		},
		{
			questionText: 'Question 9: \nThe physical equipment that makes up a computer. This includes input, processing, storage, and output devices. (Keyboards, chips, printers, CPUs and monitors are examples of this.)',
			answerOptions: [
				{ answerText: 'Application program', isCorrect: false },
				{ answerText: 'Hardware', isCorrect: true },
				{ answerText: 'Central Processing Unit (CPU)', isCorrect: false },
				{ answerText: 'Software', isCorrect: false },
			],
		},
		{
			questionText: 'Question 10: \nThe software that controls the operation of the computer and enables communication between components.',
			answerOptions: [
				{ answerText: 'Application program', isCorrect: false },
				{ answerText: 'Central processing unit (CPU)', isCorrect: false },
				{ answerText: 'Hardware', isCorrect: false },
				{ answerText: 'Operating system', isCorrect: true },
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

export default Computer;



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