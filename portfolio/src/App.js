import React from 'react';
import About from './components/About';
import './App.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App d-flex flex-row justify-content-end">
      <NavBar />
      <div className='w-100 d-flex flex-column '>
        <div className='content title typewriter'>
          <h1 className='titleName'>Jacob McFaul</h1>
          <h1 className='titleTitle'>Web Developer!</h1>
        </div>
        <div className='content about'>
          <About />
        </div>
        <div className='content bg-primary'>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;