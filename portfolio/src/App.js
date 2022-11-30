import React from 'react';
import './App.css'
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import NoPage from './components/NoPage';
import Home from './components/Home';
import {
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="App d-flex flex-column justify-content-end">
      <NavBar />
      <Routes>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;