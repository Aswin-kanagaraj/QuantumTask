import React from "react";
import { GrGroup } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";
export const Card = ({ numvalue, icon1, icon2, content, icon2color, content2 }) => {
    return (
        <div>
            <div className="container ms-4" style={{ height: "30vh", width: '35vh', borderRadius: '3px', backgroundColor: '#F3F6FF' }}>
                <div>
                    <div className="d-flex" >
                        <h1>{numvalue}</h1>
                        <span style={{ marginLeft: '40%', marginTop: '4px' }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                color: "#20bead", 
                                fontSize: "30px", 
                            }}>
                                {icon1}
                            </div></span>

                    </div>
                    <div className="mt-5">
                        <h6>{content}</h6>
                        <div>{icon2}&nbsp;{content2}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}