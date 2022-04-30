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
