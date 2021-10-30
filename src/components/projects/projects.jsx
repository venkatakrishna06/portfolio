import React from 'react';
import './projects.css';
import Project from '../project/project';
import Fade from 'react-reveal/Fade';
function Projects() {
    return (
        <div className='projects' id='projects'>
            <Fade bottom><h1 className='section__heading'>Projects</h1></Fade>
           
            <div className="projects__projectCont">

            {/* alunno project */}
              <Project title="Alunno.tech"
              desc="A website made using react,react-hooks. In this students can check timetables for different groups.
              Refer study material and be able to download from internet.It is deployed on netlify."
              langs={['HTML','CSS','ReactJS','Bootstrap','Material-UI']}
              liveLink="https://www.alunno.tech/"
              githubLink="https://github.com/venkatakrishna06/alunno"
              />

            {/*  project */}
             <Project title="Real-Estate Demo site"
             desc="A demo website for RealEstate venture.
             I have built this using Angular and animations for better user experience."
             langs={['Angular','Javascript','Bootstrap']}
                      liveLink={'https://nifty-kilby-c430a3.netlify.app/'}
             githubLink="https://github.com/venkatakrishna06/realestate-demo" />

             {/* Crown Clothing Project */}


             {/* IntelliBee Project */}
             <Project title="To-do app"
             desc="A to-do app with signup and login features. I used local storage to store account details. After logedin
             user can input their tasks and add to todo list"
             langs={['HTML','CSS','React']}
                      liveLink="https://legalmind-todo.netlify.app/"
             githubLink="https://github.com/tanishgupta-git/IntelliBee"
             />

             {/* Rental Seeker */}
             <Project title={"Movies list"}
             desc="A web app in set of Movies is shown. In this user can search a
            movie for a specific name and the movie based on that genre."
             langs={['React']}
             githubLink="https://github.com/tanishgupta-git/Rental-Seeker.git"
             />
                <Project title="Crown Clothing"
                         desc="Developing an e-commerce website using firebase at backend. Work in progres "
                         langs={['React','Redux','Firebase']}

                         githubLink="https://github.com/venkatakrishna06/ecommerce"
                />
             


            </div>
        </div>
    )
}

export default Projects;