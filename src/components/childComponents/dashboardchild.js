import React, { useEffect, useState } from "react";
import { Card } from "./card";
import { MdOutlineWbSunny } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";
import { GoStopwatch } from "react-icons/go";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { TbClockX } from "react-icons/tb";
import { HiMiniMoon } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import Attendancechart from "./chart";
export const DashboardChild = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setCurrentDate(formattedDate);
            setCurrentTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div style={{ display: 'flex',}}>
                <div
                    className="container"
                    style={{
                        height: '65vh',
                        width: '35vh',
                        borderRadius: '8px',
                        backgroundColor: '#F3F6FF',
                        padding: '1rem',
                        flexShrink: 0,
                    }}
                >
                    <div>
                        <span style={{ fontSize: '40px', color: '#c8cad5' }}>
                            <MdOutlineWbSunny />
                        </span>
                        <span style={{ fontSize: '30px', color: '#c8cad5', marginLeft: '1rem' }}>
                            {currentTime}
                        </span>
                        <p style={{ color: '#c8cad5', marginTop: '1rem' }}>Realtime Insight</p>
                        <div style={{ marginTop: '50%' }}>
                            <h4>Today:</h4>
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{currentDate}</p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', }}>
                   
                    <div style={{ display: 'flex', }}>
                        <Card
                            numvalue={'452'}
                            icon1={<GrGroup />}
                            content={'Total Employees'}
                            icon2={<GoPlusCircle style={{ color: '#4b9516' }} />}
                            content2={'2 new employees added!'}
                        />
                        <Card
                            numvalue={'360'}
                            icon1={<GoStopwatch />}
                            content={'On Time'}
                            icon2={<BsFillArrowUpRightCircleFill style={{ color: '#4b9516' }} />}
                            content2={'-10% less than yesterday'}
                        />
                        <Card
                            numvalue={'30'}
                            icon1={<AiFillCloseCircle />}
                            content={'Absent'}
                            icon2={<BsArrowDownLeftCircleFill style={{ color: '#a83f3f' }} />}
                            content2={'+3% increase than yesterday'}
                        />
                    </div>

                    <div style={{ display: 'flex', }}>
                        <Card
                            numvalue={'62'}
                            icon1={<TbClockX />}
                            content={'Late Arrival'}
                            icon2={<BsArrowDownLeftCircleFill style={{ color: '#a83f3f' }} />}
                            content2={'+3% increase than yesterday'}
                        />
                        <Card
                            numvalue={'6'}
                            icon1={<HiMiniMoon />}
                            content={'Early Departures'}
                            icon2={<BsFillArrowUpRightCircleFill style={{ color: '#4b9516' }} />}
                            content2={'-10% less than yesterday'}
                        />
                        <Card
                            numvalue={'42'}
                            icon1={<LuCalendarClock />}
                            content={'Time-off'}
                            icon2={<BsFillArrowUpRightCircleFill style={{ color: '#4b9516' }} />}
                            content2={'2% increase than yesterday'}
                        />
                    </div>
                </div>

            </div>
           
        </div>


    )
}