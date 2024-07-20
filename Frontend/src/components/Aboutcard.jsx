import React from 'react'
import './Aboutcard.css'


const Aboutcard = (props) => {
  return (
    <div className='card'>
    <div className='dot-container'>
        <div className="left">
            <div className="dot one"></div>
            <div className="dot two"></div>
            <div className="dot three"></div>
        </div>
        <div className="right">
         bash
        </div>
    </div>
    
    <div className="main-container">
        <span>$ npm run dev</span>
        <span className='role'>{props.role}</span>
        <span>^C</span>
    </div>

    </div>
  )
}

export default Aboutcard
