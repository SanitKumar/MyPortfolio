import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sanit Kumar</b> and I am from Kotputli, Jaipur, India.
            I'm a <b>Web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>Web developer</b> at Celebal Technologies which is a premier software services company.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Proffesional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='C++' />
        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Github' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About