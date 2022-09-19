import React from 'react'
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Experiences from './components/Experiences/Experiences';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
          <Navbar />
          <Intro />
          <Services />
          <Experiences/>
          <Works />
          <Portfolio/>
    </div>
  );
}

export default App;
