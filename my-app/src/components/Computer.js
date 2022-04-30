import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/style.css'
import { Helmet } from "react-helmet"

function Computer() {
  return (
    <div> 
  <div className="quiz-container" id="quiz">
    <div className="quiz-header">
      <h2 id="question">Question Text</h2>
      <ul>
        <li>
          <input type="radio" name="answer" id="a" className="answer"/>
          <label htmlFor="a" id="a_text">Answer</label>
        </li>

        <li>
          <input type="radio" name="answer" id="b" className="answer"/>
          <label htmlFor="b" id="b_text">Answer</label>
        </li>

        <li>
          <input type="radio" name="answer" id="c" className="answer"/>
          <label htmlFor="c" id="c_text">Answer</label>
        </li>

        <li>
          <input type="radio" name="answer" id="d" className="answer"/>
          <label htmlFor="d" id="d_text">Answer</label>
        </li>
      </ul>
    </div>
    <button id="submit">Submit</button>
  </div>
  <Helmet>
  <script async="true" src="script.js"></script>
  </Helmet>
 
    </div>
  )
}

export default Computer;