import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/quizstyle.css'
import { Helmet } from "react-helmet"

function Chemistry() {
  const questions = [
		{
			questionText: 'the basic unit of a chemical element',
			answerOptions: [
				{ answerText: 'atom', isCorrect: false },
				{ answerText: 'matter', isCorrect: false },
				{ answerText: 'neutron', isCorrect: true },
				{ answerText: 'element', isCorrect: false },
			],
		},
		{
			questionText: 'The central part of an atom that contains the protons and neutrons',
			answerOptions: [
				{ answerText: 'neutron', isCorrect: false },
				{ answerText: 'nucleaus', isCorrect: true },
				{ answerText: 'metal', isCorrect: false },
				{ answerText: 'atom', isCorrect: false },
			],
		},
		{
			questionText: 'subatomic particle found in the nucleus of atoms that differs from the other subatomic particles',
			answerOptions: [
				{ answerText: 'atom', isCorrect: true },
				{ answerText: 'electron', isCorrect: false },
				{ answerText: 'proton', isCorrect: false },
				{ answerText: 'neutron', isCorrect: false },
			],
		},
		{
			questionText: 'smallest of the particles that make up an atom, and they carry a negative charge',
			answerOptions: [
				{ answerText: 'Neuton', isCorrect: false },
				{ answerText: 'electron', isCorrect: true },
				{ answerText: 'boiling point', isCorrect: false },
				{ answerText: 'evaporation', isCorrect: false },
			],
		},
    {
			questionText: 'the number of protons in the nucleus of an atom',
			answerOptions: [
				{ answerText: 'mass number', isCorrect: false },
				{ answerText: 'solvent', isCorrect: true },
				{ answerText: 'atomic number', isCorrect: false },
				{ answerText: 'insolvent', isCorrect: false },
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
			questionText: 'In a solution which part of the solution is the solute: ice tea mix or water? ',
			answerOptions: [
				{ answerText: 'ice tea', isCorrect: false },
				{ answerText: 'water', isCorrect: true },
				{ answerText: 'metal', isCorrect: false },
				{ answerText: 'atom', isCorrect: false },
			],
		},
		{
			questionText: 'What is a substance that is dissolved in another substance? ',
			answerOptions: [
				{ answerText: 'atom', isCorrect: true },
				{ answerText: 'electron', isCorrect: false },
				{ answerText: 'solution', isCorrect: false },
				{ answerText: 'solute', isCorrect: false },
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