import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hi, I'm <span className='hero-name'>ROUSHAN</span></h2>
            <h4>Transforming Ideas into Digital Reality </h4>
            <p><span className='first-p'>Innovative Frontend Creator | Building Sleek and User-Friendly Web Applications</span></p>
        </div>

        <div className='hero-img'>
            <div>
                <img src='./assets/images/boss.png' alt='Avtar'/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/physics.png' alt='react'/>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/html.png' alt='html'/>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/css-3.png' alt='css'/>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/js-file.png' alt='js'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero