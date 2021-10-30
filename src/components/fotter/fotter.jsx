import React from 'react';
import { GrLinkedinOption,GrInstagram,GrGithub,GrTwitter,GrMail } from "react-icons/gr";
import './fotter.css';
import Fade from 'react-reveal/Fade';

function Fotter(){
    return (
        <div className='fotter' id={'fotter'}>
        <Fade bottom><p className='fotter__socialHead'>&lt; Contact &gt;<br/></p>
        <ul className='fotter__social'>
         <a href="https://www.instagram.com/venkatakrishna06/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
         <a href="https://www.linkedin.com/in/venkata-krishna-reddy-6492431ba/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a>
         <a href="https://github.com/venkatakrishna06" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
         <a href="mailto:venkatakrishna9642@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail /></a>
        </ul>
        </Fade>
        <Fade bottom><h3 className='fotter__head'> By Venkata krishna Reddy</h3></Fade>
      </div>
    )
}

export default Fotter;