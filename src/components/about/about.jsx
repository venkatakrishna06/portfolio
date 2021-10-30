import React,{useState} from 'react';
import './about.css';
import Fade from 'react-reveal/Fade';
import Welcome from '../../Welcome.svg';

const About = () => {
   const [show,Setshow] = useState({type:"quote"})
 return (
    <div className='about' id='about'>
    <h1 className='section__heading'>About</h1>
        <div className="about__section">
         <Fade bottom><div className='about__text'>
         Hii I am Venkata Krishna Reddy. I am currently pursuing my B.Tech in CSE from Amrita Vishwa Vidyapeetham, Chennai. I like to build things on web.
         I am currently designing and developing websites using ReactJS a Javascript framework that enhance user experience.
         </div></Fade>
         <Fade bottom><img src={Welcome} alt="" className="about__sectionImage"/></Fade>
         </div>
        <Fade bottom> 
        <div className="about__sideParent">
         <div className="about__buttons">
            <button className={show.type==='quote'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'quote'})}>Experience</button>
            <button className={show.type==='interest'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'interest'})}> Interests</button>
            <button className={show.type==='recentTech'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'recentTech'})}>My skills</button>
         </div>
         <div className="about__side">
        {
           show.type === "quote" && <div className="about__quote">
           2 months experience as ReactJS intern at Unruffled Feathers

           </div> 
         }
        { show.type === "interest" && (
           <div className="about__subSection">
            <ul>
               <li className='about__subSectionitem'>Business</li>
               <li className='about__subSectionitem'>Playing Cricket</li>
               <li className='about__subSectionitem'>Music</li>
               <li className='about__subSectionitem'>Web</li>
            </ul>
         </div>
        )
        }
        { show.type === "recentTech" && (
           <div className="about__subSection">
            <ul>
               <li className='about__subSectionitem'>HTML</li>
               <li className='about__subSectionitem'>CSS</li>
               <li className='about__subSectionitem'>ReactJS</li>
               <li className='about__subSectionitem'>Python</li>
               <li className='about__subSectionitem'>JavaScript</li>

            </ul>
         </div>
        )
        }
        </div>

      </div>
      </Fade>

    </div>
 )
}

export default About;