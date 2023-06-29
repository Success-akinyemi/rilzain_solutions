import React from 'react'
import './GetStarted.css'

function GetStarted() {
  return (
    <div className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Rilzain Solutions</span>
                <span className="secondaryText">
                    Subscribe and find super attractive price quotes from us
                    <br />
                    Find your residence soon
                </span>

                <button className="button">
                    <a href='mailto:email@email.com'>Get Started</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted