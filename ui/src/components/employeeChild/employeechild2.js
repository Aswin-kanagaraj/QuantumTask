import React, { useEffect, useState } from "react";
import "./employeechild1.css";
import { BiSolidGroup } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { HOST } from "../../App";
import axios from "axios";
const EmployeeTable2 = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "John Smith",
      shift: "9:00 AM - 6:00 PM",
      status: "On Time",
      clockIn: "8:55 AM",
      clockOut: "6:19 PM",
      requiredTime: "9 Hours",
      actualTime: "9 Hours 24 Minutes",
    },
    {
      name: "John Smith",
      shift: "9:00 AM - 6:00 PM",
      status: "On Time",
      clockIn: "8:55 AM",
      clockOut: "6:19 PM",
      requiredTime: "9 Hours",
      actualTime: "9 Hours 24 Minutes",
    },
    {
      name: "John Smith",
      shift: "9:00 AM - 6:00 PM",
      status: "On Time",
      clockIn: "8:55 AM",
      clockOut: "6:19 PM",
      requiredTime: "9 Hours",
      actualTime: "9 Hours 24 Minutes",
    },
  ];
  const { designation } = JSON.parse(localStorage.getItem("user"))
const [user,setUser]= useState()
  const getData = async()=>{
    const data = await axios.get(`${HOST}/quantum/getuser`);
    setUser(data.data)
  }
useEffect(()=>{
  getData()
},[])
  return (
    <div className="attendance-container">
      <div className="header">
        <h2>Today, 7 Sep, 2020</h2>
        {designation === 'admin' && <button className="add-employee-btn" onClick={() => { navigate('/dashboard/adduser') }}>Add Employee</button>}
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Shift & Status</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Required Time</th>
            <th>Actual Time</th>
          </tr>
        </thead>
        <tbody>
          {data&& data?.map((entry, index) => (
            <tr key={index}>
              <td className="member-cell">
                <img
                  src={<BiSolidGroup />}
                  alt="Profile"
                  className="profile-pic"
                />
                <span>{entry.name}</span>
              </td>
              <td>
                <div className="shift-status">
                  <span>Shift Duration</span>
                  <span>{entry.shift}</span>
                  <button className="status-btn">{entry.status}</button>
                </div>
              </td>
              <td>{entry.clockIn}</td>
              <td>{entry.clockOut}</td>
              <td>{entry.requiredTime}</td>
              <td>{entry.actualTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Employee's</h4>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Designation</th>
            <th>Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {user.map((entry, index) => (
            <tr key={index}>

              <td>

                <span>{index + 1}</span>
              </td>
              <td>
                <span>{entry.name}</span>
              </td>
              <td>
                {entry.surname}
              </td>
              <td>{entry.designation}</td>
              <td>{entry.address}</td>
              <td>{entry.contactNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable2;
