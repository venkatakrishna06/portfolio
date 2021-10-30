import React from 'react';

import './intro.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
function Intro() {
    return (
        <div className="intro">
        <Zoom>
        <div className='intro__image'> 
        <div className='intro__imageBack'>
        </div> 
        <img className="taniImage" src={"https://i.ibb.co/ThY4w1z/mu-pic.jpg"} alt=""/>
        </div>
       </Zoom>
        <div className='intro__desc'>
        <Fade bottom><p className='intro__msg'>Hi, my name is</p></Fade>
        <Fade bottom><h1 className='intro__head'>Venkata Krishna Reddy.
        </h1></Fade>
        <Fade bottom><h1 className='intro__text'>I design and develop web app using ReactJS a JavaScript framework.</h1></Fade>
        <Fade bottom> <a href="#about" className='intro__aboutLink'>More About Me</a></Fade>
          </div>
      </div>
    )
}

export default Intro;
