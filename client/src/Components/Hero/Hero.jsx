import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                        initial={{y: '2rem', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                    >
                        Discover <br /> Most 
                        Suitable <br /> Property
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Discover your perfect home today.</span>
                    <span className='secondaryText' >Find the ideal property that suits your lifestyle and aspirations.</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="blue" size={25} />
                    <input type="text" />
                    <button className='button'><Link to='/home'>Search</Link></button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={800} end={1200} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Premium Houses
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1000} end={2000} duration={2} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={30} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Awards Winning
                        </span>
                    </div>
                </div>
            </div>

            <div className="flexCenter hero-right">
                <motion.div 
                    className="image-container"
                    initial={{x: '7rem', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: 'spring'
                    }}
                >
                    <img src="./hero-image.png" alt="hero" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero