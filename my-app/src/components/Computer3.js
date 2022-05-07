import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Computer() {
  const questions = [
		{
			questionText: 'Question 1: \nWhy do computers use binary code to store data?',
			answerOptions: [
				{ answerText: 'Binary code is more reliable', isCorrect: false },
				{ answerText: 'Binary code is much faster', isCorrect: false },
				{ answerText: 'Binary code takes up less space', isCorrect: false },
				{ answerText: 'Electronic circuits can only be on or off', isCorrect: true },
			],
		},
		{
			questionText: 'Question 2: \nWhen does data enter a computer?',
			answerOptions: [
				{ answerText: 'before processing but after the entry stage', isCorrect: false },
				{ answerText: 'during the entry stage', isCorrect: false },
				{ answerText: 'during the input stage', isCorrect: true },
				{ answerText: 'during the processing stage', isCorrect: false },
			],
		},
		{
			questionText: 'Question 3: \nWhat does the HTML language stand for?',
			answerOptions: [
				{ answerText: 'HyperText Model Language (HTML)', isCorrect: false },
				{ answerText: 'HighText Markup Language (HTML)', isCorrect: false },
				{ answerText: 'HyperText Markup Language (HTML)', isCorrect: true },
				{ answerText: 'HyperTop Markup Language (HTML)', isCorrect: false },
			],
		},
		{
			questionText: 'Question 4: \nWhich is not a programming language?',
			answerOptions: [
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Red', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'Question 5: \nWhat is the fastest and most sufficient programming language?',
			answerOptions: [
				{ answerText: 'Ruby', isCorrect: false },
				{ answerText: 'R', isCorrect: false },
				{ answerText: 'C#', isCorrect: false },
				{ answerText: 'C++', isCorrect: true },
			],
		},
		{
			questionText: 'Question 6: \nThe fields in a record store what?',
			answerOptions: [
				{ answerText: 'all store the same data', isCorrect: false },
				{ answerText: 'all store the same type of data', isCorrect: false },
				{ answerText: 'are all the same size', isCorrect: false },
				{ answerText: 'store single items of data', isCorrect: true },
			],
		},
		{
			questionText: 'Question 7: \nA fill tool can fill a shape with what?',
			answerOptions: [
				{ answerText: 'With color only', isCorrect: false },
				{ answerText: 'With color, texture, patterns or pictures', isCorrect: true },
				{ answerText: 'With texture and color only', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Question 8: \nWhat does the crop tool do?',
			answerOptions: [
				{ answerText: 'It allows you to change the color of an image', isCorrect: false },
				{ answerText: 'It deletes a photo or image', isCorrect: false },
				{ answerText: 'It allows you to select and use part of an image', isCorrect: true },
				{ answerText: 'It allows you to harvest your work', isCorrect: false },
			],
		},
		{
			questionText: 'Question 9: \nPhotos can be edited by changing what?',
			answerOptions: [
				{ answerText: 'Contras', isCorrect: false },
				{ answerText: 'Brightness', isCorrect: false },
				{ answerText: 'Color saturation', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Question 10: \nWhat is computer science?',
			answerOptions: [
				{ answerText: 'the study of design, build, and test hardware components and systems', isCorrect: false },
				{ answerText: 'the study of computers and computational systems', isCorrect: true },
				{ answerText: 'the study of building smart machines capable of performing tasks that typically require human intelligence', isCorrect: false },
				{ answerText: 'the study of management, creation, and study of money and investments', isCorrect: false },
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