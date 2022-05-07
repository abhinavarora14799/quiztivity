import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Computer() {
  const questions = [
		{
			questionText: 'Question 1: \nA computer input device that is used to enter computer instructions and data into the computer.',
			answerOptions: [
				{ answerText: 'Floppy disk', isCorrect: false },
				{ answerText: 'Flash drive', isCorrect: false },
				{ answerText: 'Monitor', isCorrect: false },
				{ answerText: 'Keyboard', isCorrect: true },
			],
		},
		{
			questionText: 'Question 2: \nAn output device that shows images and text from the computer.',
			answerOptions: [
				{ answerText: 'Desktop', isCorrect: false },
				{ answerText: 'Modem', isCorrect: false },
				{ answerText: 'Monitor', isCorrect: true },
				{ answerText: 'Speaker', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nHow do you open a program such as Microsoft word when there are no icons on the desktop?',
			answerOptions: [
				{ answerText: 'Double click on the desktop to reveal hidden items', isCorrect: false },
				{ answerText: 'Use the command keyboard', isCorrect: false },
				{ answerText: 'Click the start menu button and select the program from the menu', isCorrect: true },
				{ answerText: 'It is not possible to start it any other way', isCorrect: false },
			],
		},
		{
			questionText: 'Question 4: \nWhich one of the following is a search engine?',
			answerOptions: [
				{ answerText: 'Chrome', isCorrect: false },
				{ answerText: 'Altavista', isCorrect: true },
				{ answerText: 'MSN', isCorrect: false },
				{ answerText: 'Netscape', isCorrect: false },
			],
		},
		{
			questionText: 'Question 5: \nWhich of the following is a web browser?',
			answerOptions: [
				{ answerText: 'Hotmail', isCorrect: false },
				{ answerText: 'MS word', isCorrect: false },
				{ answerText: 'Internet', isCorrect: false },
				{ answerText: 'Chrome', isCorrect: true },
			],
		},
		{
			questionText: 'Question 6: \nAnother name for the address of a web page is',
			answerOptions: [
				{ answerText: 'Website', isCorrect: false },
				{ answerText: 'Domain name', isCorrect: false },
				{ answerText: 'ULR', isCorrect: false },
				{ answerText: 'URL', isCorrect: true },
			],
		},
		{
			questionText: 'Question 7: \nHow many programming languages are there?',
			answerOptions: [
				{ answerText: 'Only 100 programming languages', isCorrect: false },
				{ answerText: 'Over 300 programming languages', isCorrect: true },
				{ answerText: 'Over 450 programming languages', isCorrect: false },
				{ answerText: 'Exactly 150 programming languages', isCorrect: false },
			],
		},
		{
			questionText: 'Question 8: \nIn most computers how many bits make up a byte?',
			answerOptions: [
				{ answerText: '8', isCorrect: true },
				{ answerText: '9', isCorrect: false },
				{ answerText: '32', isCorrect: false },
				{ answerText: '36', isCorrect: false },
			],
		},
		{
			questionText: 'Question 9: \nData is stored by computers in locations called?',
			answerOptions: [
				{ answerText: 'Binaries', isCorrect: false },
				{ answerText: 'Bytes', isCorrect: true },
				{ answerText: 'Bites', isCorrect: false },
				{ answerText: 'Bikes', isCorrect: false },
			],
		},
		{
			questionText: 'Question 10: \nWhat is Data?',
			answerOptions: [
				{ answerText: 'An item of computer software', isCorrect: false },
				{ answerText: 'Letters, numbers or characters with meaning', isCorrect: false },
				{ answerText: 'Letters, numbers or characters with no meaning', isCorrect: true },
				{ answerText: 'Stored numbers', isCorrect: false },
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