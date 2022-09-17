import React from 'react'
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './Services/Services';

function App() {
  return (
    <div className='App'>
          <Navbar />
          <Intro />
          <Services />
    </div>
  );
}

export default App;
