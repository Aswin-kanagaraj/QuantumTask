import React from "react";
import "./attendancelogChild1.css";
import { FaArrowDown } from "react-icons/fa";
const AttendanceLogchild2 = () => {
  const summaryData = [
    { title: "Average Daily Hours", value: "8 hrs", color: "#f3e7fe", icon: "⏱️" },
    { title: "Total Working Days", value: "09", color: "#d7f0ff", icon: "📅" },
    { title: "Total Present Days", value: "08", color: "#e6f8e6", icon: "✔️" },
    { title: "Total Absent Days", value: "01", color: "#ffe6e6", icon: "❌" },
  ];

  const tableData = [
    {
      id: 2341421,
      employee: "Ahmed Rashdan",
      location: "Dharmapuri",
      date: "29 July 2023",
      status: "Present",
      checkIn: "09:00",
      checkOut: "18:00",
      workHours: "10h 2m",
    },
    {
      id: 3411421,
      employee: "Ali Alhamdan",
      location: "Dharmapuri",
      date: "29 July 2023",
      status: "Present",
      checkIn: "00:00",
      checkOut: "00:00",
      workHours: "0m",
    },
    {
      id: 2341121,
      employee: "Mona Alghafar",
      location: "Dharmapuri",
      date: "29 July 2023",
      status: "Present",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: 2341421,
      employee: "Moustafa Adel",
      location: "Dharmapuri",
      date: "29 July 2023",
      status: "Present",
      checkIn: "09:00",
      checkOut: "18:00",
      workHours: "10h 5m",
    },
  ];

  return (
    <div className="attendance-log">
      <h2>Attendance Log</h2>
      <div className="summary-cards">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="summary-card"
            style={{ backgroundColor: item.color }}
          >
            <span className="icon">{item.icon}</span>
            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Work hours</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.employee}</td>
              <td>{row.location}</td>
              <td>{row.date}</td>
              <td className={`status ${row.status.toLowerCase()}`}>
                {row.status}
              </td>
              <td className={`time ${row.checkIn === "00:00" ? "red" : ""}`}>
                {row.checkIn}
              </td>
              <td className={`time ${row.checkOut === "00:00" ? "red" : ""}`}>
                {row.checkOut}
              </td>
              <td>{row.workHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary text-white mt-2" style={{marginLeft:'90%'}}><FaArrowDown/>Export</button>
    </div>
  );
};

export default AttendanceLogchild2;
