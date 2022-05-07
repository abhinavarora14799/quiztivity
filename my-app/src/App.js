import { useState } from 'react'
import React, { Fragment }  from 'react';
import Navbar from './home_page/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Textbox from './home_page/textbox';
import styled from 'styled-components';
import Homes from './Homes';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import PlaySound from './components/sound';
import Navbar2 from './components/navbar2';
import Home2 from './components/Home2';

import Mathlist from './components/Mathlist';
import Math from './components/Math'
import Math2 from './components/Math2'
import Math3 from './components/Math3'

import Computerlist from './components/Computerlist';
import Computer from './components/Computer'
import Computer2 from './components/Computer2'
import Computer3 from './components/Computer3'

import Physicslist from './components/Physicslist';
import Physics from './components/Physics'
import Physics2 from './components/Physics2'
import Physics3 from './components/Physics3'

import Chemistrylist from './components/Chemistrylist';
import Chemistry from './components/Chemistry'
import Chemistry2 from './components/Chemistry2'
import Chemistry3 from './components/Chemistry3'



function App() {
    const [childData, setChildData] = useState("");
    if(childData === "TRUE"){
        console.log('nice')
    }
    else(console.log("not nice"));
    if(childData === "TRUE"){
        return (
            <Homes2>
                <Router>
                <Navbar2/>
                <Routes>
                    <Route path='/Home2' exact element={<Home2/>}/>  
                    <Route path='/login' exact element={<Home2/>}/>

                    <Route path='/Math' exact element={<Mathlist/>}/>    
                    <Route path='/MathQuiz' exact element={<Math/>}/> 
                    <Route path='/MathQuiz2' exact element={<Math2/>}/>
                    <Route path='/MathQuiz3' exact element={<Math3/>}/>

                    <Route path='/Computer' exact element={<Computerlist/>}/> 
                    <Route path='/ComputerQuiz' exact element={<Computer/>}/> 
                    <Route path='/ComputerQuiz2' exact element={<Computer2/>}/>
                    <Route path='/ComputerQuiz3' exact element={<Computer3/>}/>

                    <Route path='/Physics' exact element={<Physicslist/>}/> 
                    <Route path='/PhysicsQuiz' exact element={<Physics/>}/> 
                    <Route path='/PhysicsQuiz2' exact element={<Physics2/>}/>
                    <Route path='/PhysicsQuiz3' exact element={<Physics3/>}/>

                    <Route path='/Chemistry' exact element={<Chemistrylist/>}/> 
                    <Route path='/ChemistryQuiz' exact element={<Chemistry/>}/> 
                    <Route path='/ChemistryQuiz2' exact element={<Chemistry2/>}/>
                    <Route path='/ChemistryQuiz3' exact element={<Chemistry3/>}/>

                </Routes>
                </Router>
            </Homes2>
            // <Homes></Homes>
        );
    }
    else{
        return (
            <Home>
                <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Homes/>}/>  
                    <Route path='/login' exact element={<Login passChildData={setChildData}/>}/>
                        <Route path='signup' exact element={<Signup/>}/>
                </Routes>
                </Router>
                <PlaySound/>
            </Home>
            // <Homes></Homes>
        );
    }
    
}


export default App;

export const Home = styled.div`
background-image: linear-gradient(315deg, #504C4C 0%, #263a3a 100%);
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 200px;
align-items: center;
`;

export const Homes2 = styled.div`
background-image: linear-gradient(315deg, #504C4C 0%, #263a3a 100%);
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 200px;
align-items: center;
`;
