import React from 'react';
import Title from './Title';
import Contact from './Contact';
import Cabin from './Cabin';

import "../styles/home.css"

const Home = () => {
  return (
    <>
      <div className='content title'>
        <Title/>
      </div>
      <div className='content cabin'>
        <Cabin />
      </div>
      <div className='content contact'>
        <Contact/>
      </div>
    </>
  )
}

export default Home