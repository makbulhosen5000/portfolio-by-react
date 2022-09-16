import React from 'react'
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
          <Navbar/>
          <Intro/>
    </div>
  );
}

export default App;
