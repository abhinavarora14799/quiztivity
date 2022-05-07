import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Chemistry() {
  const questions = [
		{
			questionText: 'Which kitchen job involves a chemical change?',
			answerOptions: [
				{ answerText: 'Making ice cubes', isCorrect: false },
				{ answerText: 'Making ice cubes', isCorrect: false },
				{ answerText: 'Slicing a carrot', isCorrect: true },
				{ answerText: 'Boiling waters', isCorrect: false },
			],
		},
		{
			questionText: 'Dissolving sugar into sweet tea is an example of a',
			answerOptions: [
				{ answerText: 'chemical change', isCorrect: false },
				{ answerText: 'physical change', isCorrect: true },
				{ answerText: 'metal', isCorrect: false },
				{ answerText: 'atom', isCorrect: false },
			],
		},
		{
			questionText: 'Which property of matter stays the same during both physical and chemical changes?',
			answerOptions: [
				{ answerText: 'Density', isCorrect: true },
				{ answerText: 'state of matter', isCorrect: false },
				{ answerText: 'mass', isCorrect: false },
				{ answerText: 'neutron', isCorrect: false },
			],
		},
		{
			questionText: 'Each of the pictures above shows a change that produces bubbles.  Which one shows a physical change?',
			answerOptions: [
				{ answerText: 'Vinegar onto baking soda', isCorrect: false },
				{ answerText: 'heating water', isCorrect: true },
				{ answerText: 'boiling point', isCorrect: false },
				{ answerText: 'mentos into coke', isCorrect: false },
			],
		},
    {
			questionText: 'Which statement is true about acids?',
			answerOptions: [
				{ answerText: 'They hurt', isCorrect: false },
				{ answerText: 'They turn litmus paper blue', isCorrect: true },
				{ answerText: 'they can harm you', isCorrect: false },
				{ answerText: 'they have a ph of 7 or below', isCorrect: false },
			],
		questionText: 'What is a mixture? ',
			answerOptions: [
				{ answerText: 'a combination of elements to make a new substance ', isCorrect: false },
				{ answerText: 'a chemically combined substance', isCorrect: false },
				{ answerText: 'neutron', isCorrect: true },
				{ answerText: 'element', isCorrect: false },
			],
		},
		{
			questionText: 'If a substance turns blue litmus paper red, and does not change red litmus paper, it is:',
			answerOptions: [
				{ answerText: 'an acid', isCorrect: false },
				{ answerText: 'a base', isCorrect: true },
				{ answerText: 'a neutral', isCorrect: false },
				{ answerText: 'atom', isCorrect: false },
			],
		},
		{
			questionText: 'Predict the pH of lye, a strong base used in oven cleaners',
			answerOptions: [
				{ answerText: '2', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: 'What is the simplest form that cannot be broken down to anything simpler? ',
			answerOptions: [
				{ answerText: 'Neuton', isCorrect: false },
				{ answerText: 'electron', isCorrect: true },
				{ answerText: 'boiling point', isCorrect: false },
				{ answerText: 'element', isCorrect: false },
			],
		},
    {
			questionText: 'Which of the following is not a separation technique',
			answerOptions: [
				{ answerText: 'mass number', isCorrect: false },
				{ answerText: 'solvent', isCorrect: true },
				{ answerText: 'hand sorting', isCorrect: false },
				{ answerText: 'insolvent', isCorrect: false },
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