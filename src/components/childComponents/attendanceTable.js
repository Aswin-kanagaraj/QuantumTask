import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceTable = () => {
  const [search, setSearch] = useState("");

  const attendanceData = [
    {
      id: "2341421",
      employee: "Ahmed Rashdan",
      role: "Help Desk Executive",
      department: "IT Department",
      date: "29 July 2023",
      status: "Work from office",
      checkIn: "09:00",
      checkOut: "18:00",
      workHours: "10h 2m",
    },
    {
      id: "3411421",
      employee: "Ali Alhamdan",
      role: "Senior Executive",
      department: "Marketing",
      date: "29 July 2023",
      status: "Absent",
      checkIn: "00:00",
      checkOut: "00:00",
      workHours: "0m",
    },
    {
      id: "2341121",
      employee: "Mona Alghafar",
      role: "Senior Manager",
      department: "Design",
      date: "29 July 2023",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: "2341421",
      employee: "Moustafa Adel",
      role: "Director",
      department: "Development",
      date: "29 July 2023",
      status: "Work from home",
      checkIn: "09:00",
      checkOut: "18:00",
      workHours: "10h 5m",
    },
    {
      id: "2341421",
      employee: "Jhon Neleson",
      role: "Director",
      department: "Sales",
      date: "29 July 2023",
      status: "Work from office",
      checkIn: "09:00",
      checkOut: "18:00",
      workHours: "10h 2m",
    },
  ];

  const filteredData = attendanceData.filter((entry) =>
    entry.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Attendance Overview</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Quick Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50"
        />
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Role</th>
            <th>Department</th>
            <th>Date</th>
            <th>Status</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Work Hours</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.id}</td>
              <td>{entry.employee}</td>
              <td>{entry.role}</td>
              <td>{entry.department}</td>
              <td>{entry.date}</td>
              <td>
                <span
                  className={`badge ${
                    entry.status === "Absent"
                      ? "bg-danger"
                      : entry.status === "Late arrival"
                      ? "bg-warning text-dark"
                      : entry.status === "Work from home"
                      ? "bg-secondary"
                      : "bg-primary"
                  }`}
                >
                  {entry.status}
                </span>
              </td>
              <td>{entry.checkIn}</td>
              <td>{entry.checkOut}</td>
              <td>{entry.workHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
