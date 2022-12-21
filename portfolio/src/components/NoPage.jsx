import React from 'react'
import "../styles/noPage.css"

const NoPage = () => {
  return (
    <div className='noPage'>
      <h1>I'm sorry this page doesn't exist.</h1>
      <a href="/#title" className='returnLink'>Click Here</a>
      <h1>to return</h1>
    </div>
  )
}

export default NoPage