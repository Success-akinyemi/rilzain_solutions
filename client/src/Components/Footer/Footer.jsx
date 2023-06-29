import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                {/*<img src="./logo2.png" alt="footer logo" width={120} />*/}
                <h1 style={{fontSize:'40px'}}>Rilzain Solutions</h1>

                <span className='secondaryText'>
                    Our Visionis to make to all people <br />
                    the best palce to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className='secondaryText'>145 New Address, Lagos 4577, Nigeria</span>
            
                <div className="flexCenter f-menu">
                    <span><Link to='/home'>Property</Link></span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                    <span><Link to='/login'>Admin</Link></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer