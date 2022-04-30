import React, {useState} from 'react'
import styled from 'styled-components'
import '../html/style.css'
import { Helmet } from "react-helmet"

function Math() {
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