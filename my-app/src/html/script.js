import React, { useState } from 'react';

export default function Math(){}

const quizData = [
    {
        question: "Question 1: \nWhich shows 6 thousands, 7 hundreds, and 4 ones?",
        a: "674",
        b: "6,740",
        c: "6,704",
        d: "647",
        correct: "c",
    },
    {
        question: "Question 2: \nThere were 28 pumpkins in my farm. I added another 65 pumpkins to the farm. How many total pumpkins were there?",
        a: "37",
        b: "93",
        c: "73",
        d: "45",
        correct: "b",
    },
    {
        question: "Question 3: \nWhat number rounds to 60?",
        a: "62",
        b: "70",
        c: "65",
        d: "54",
        correct: "a",
    },
    {
        question: "Question 4: \nThere were seven cars with four people in each car. How many people were there in all?",
        a: "19",
        b: "28",
        c: "11",
        d: "36",
        correct: "b",
    },
    {
        question: "Question 5: \nSelect the answer below: (5)(3-1)+4 = ?",
        a: "14",
        b: "15",
        c: "20",
        d: "12",
        correct: "a",
    },
    {
        question: "Question 6: \nThere were four trees with six birds on each tree. Then, seven birds flew away. How many birds were still on the trees?",
        a: "24",
        b: "28",
        c: "17",
        d: "20",
        correct: "c",
    },
    {
        question: "Question 7: \nA picture frame has 2 sides that are 6 inches and 2 sides that are 10 inches. What is the perimeter of the picture frame?",
        a: "60",
        b: "22",
        c: "45",
        d: "32",
        correct: "d",
    },
    {
        question: "Question 8: \nMia went to the bakery and bought 19 cupcakes, 18 apple pies, and 47 donuts. How many items did she buy altogether?",
        a: "92",
        b: "53",
        c: "84",
        d: "67",
        correct: "c",
    },
    {
        question: "Question 9: \nWhat is the perimeter of an octagon that has sides 9 inches long?",
        a: "72",
        b: "64",
        c: "70",
        d: "82",
        correct: "a",
    },
    {
        question: "Question 10: \nMay started reading a book at 2:10pm. It took her 43 minutes to finish reading. What time did May finish reading her book?",
        a: "2:43pm",
        b: "3:10pm",
        c: "2:53pm",
        d: "2:33pm",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Show Quizzes</button>
           `
       }
    }
})