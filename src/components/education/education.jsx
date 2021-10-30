import React from "react";
import './education.css'
import Edx from "./edx";

function Education() {

    let details;
    details=[{
        year:"2019-2023",group:"B.Tech in Computer Science and Engineering",
        school:"Amrita Vishwa Vidyapeetham,Chennai",percentage:"8.15", title:"B.Tech"
    },
        {
            year:"2017-2019",group:"MPC",
            school:"Sri Chaitanya Junior College,Guntur",percentage:"95%", tile:"12th"
        },
        {
            year:"2014-2017",group:"CBSE Board",
            school:"Vikas Concept School,Hyderbad",percentage:"100%", title:"10th"
        }];
        return (

           <div>
               <div id={'education'} className={'education'}>
                   <h1 className='section__heading'>Education</h1>
               </div>
               {
                   details.map(items=>(
                       <Edx year={items.year} group={items.group} school={items.school} percentage={items.percentage} title={items.title}/>
                   ))
               }
           </div>
        )

}

export default Education;