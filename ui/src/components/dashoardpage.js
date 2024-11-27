import React, { useState } from "react";
import Quantumimg2 from "../images/Quantumimg2.png";
import officeImg from '../images/officeimg2.png'
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RiFileList3Fill } from "react-icons/ri";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { RxCornerBottomRight } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css'
import { DashboardChild } from "./childComponents/dashboardchild";
import Attendancechart from "./childComponents/chart";
import AttendanceTable from "./childComponents/attendanceTable";
import Employeeattendance from "./employeeChild/employeechild1";
import EmployeeTable2 from "./employeeChild/employeechild2";
import Attendancelog1 from "./attendancelogChild/attendancelogchild1";
import AttendanceLogchild2 from "./attendancelogChild/attendancelogChild2";
import Reportchild1 from "./reportChild/reportChild1";
import Reportchild2 from "./reportChild/reportChils2";
import UserProfileForm from "./setingschild/setingsChild";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export const Dashboardpage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear();
    navigate('/')
  }
  const {name} = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaBars
            style={{
              fontSize: "24px",
              cursor: "pointer",
              marginRight: "15px",
            }}
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          />
          <img
            src={Quantumimg2}
            alt="officelogo"
            style={{ height: "40px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IoNotificationsCircleSharp style={{ fontSize: "30px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <img
              src="#"
              alt="placeholder"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid #ddd",
                marginRight: "10px",
              }}
            />
            <h5 style={{ margin: "0" }}>Hello, {name}</h5>
            <RiLogoutCircleLine style={{fontSize:'25px', marginLeft:'20px'}} onClick={()=>{logout()}}/>
          </div>
        </div>
      </nav>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: isSidebarVisible ? "250px" : "0",
            backgroundColor: "#092d43",
            borderRight: isSidebarVisible ? "1px solid #ddd" : "none",
            overflow: "hidden",
            transition: "width 0.3s ease",
            minHeight: "100vh",
            color: 'white'
          }}
        >
          {isSidebarVisible && (
            <ul style={{ listStyle: "none", padding: "10px 0", margin: 0 }}>
              <li id='dashboard' onClick={() => setActiveItem('dashboard')} style={{ padding: "10px", cursor: "pointer", fontSize: '23px', backgroundColor: activeItem === 'dashboard' ? "#20bead" : "transparent", borderRadius: "5px" }}><span><RiDashboardHorizontalFill /></span><span style={{ marginLeft: '17px' }}>Dashboard</span></li>
              <li id='employee' onClick={() => setActiveItem('employee')} style={{ padding: "10px", cursor: "pointer", fontSize: '23px', backgroundColor: activeItem === 'employee' ? "#20bead" : "transparent", borderRadius: "5px" }}><span><CgProfile /></span><span style={{ marginLeft: '17px' }}>Employee</span></li>
              <li id='attendancelog' onClick={() => setActiveItem('attendancelog')} style={{ padding: "10px", cursor: "pointer", fontSize: '23px', backgroundColor: activeItem === 'attendancelog' ? "#20bead" : "transparent", borderRadius: "5px" }}><span><RiFileList3Fill /></span><span style={{ marginLeft: '17px' }}>Attendance Logs</span></li>
              <li id='reports' onClick={() => setActiveItem('reports')} style={{ padding: "10px", cursor: "pointer", fontSize: '23px', backgroundColor: activeItem === 'reports' ? "#20bead" : "transparent", borderRadius: "5px" }}><span><BsFileEarmarkPerson /></span><span style={{ marginLeft: '17px' }}>Reports</span></li>
              <li id='settings' onClick={() => setActiveItem('settings')} style={{ padding: "10px", cursor: "pointer", fontSize: '23px', backgroundColor: activeItem === 'settings' ? "#20bead" : "transparent", borderRadius: "5px" }}><span><IoSettingsSharp /></span><span style={{ marginLeft: '17px' }}>Settings</span></li>
              <li> <img src={officeImg} alt="logo" style={{
                width: '220px',
                position: 'fixed',
                bottom: '0',

              }} /></li>
            </ul>
          )}
        </div>

        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            transition: "all 0.3s ease",
          }}
        >
          <h6 style={{ color: '#20bead' }}>{activeItem.toUpperCase()}<span><RxCornerBottomRight /></span></h6>
          {activeItem === 'dashboard' ? <div>
            <div >
              <DashboardChild />
            </div>
            <div className="mt-3">
              <Attendancechart />
              <AttendanceTable />
            </div>
          </div> : ''}
          {activeItem === 'employee' ? <div>
            <Employeeattendance />
            <EmployeeTable2 />
          </div> : ''}
          {activeItem === 'attendancelog' ? <div>
            <Attendancelog1 />
            <br />
            <AttendanceLogchild2 />
          </div> : ''}
          {activeItem === 'reports' ? <div>
            <Reportchild1 />
            <Reportchild2 />
          </div> : ''}
          {activeItem === 'settings' ? <div>
            <UserProfileForm />
          </div> : ''}
        </div>
      </div>
    </div >
  );
};
