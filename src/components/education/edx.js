import React from "react";
import "./education.css"
function Edx({year,group,percentage,school,title}) {
return (
    <div className={'edx'}>
                                <div className="float exp-details">
                                    <div className="section-text sec-text">
                                        <h2>{group}</h2>
                                        <p className="ttl"><span>{year}</span></p>
                                        <p>
                                            <span className="ttl">University :</span>
                                            {school}
                                        </p>

                                        <p>
                                            <span className="ttl">Grade :</span>
                                            {percentage}
                                        </p>
                                        <div className={"line"}></div>
                                    </div>
            </div>
    </div>






)

}
export default Edx;