import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Employeeattendance = () => {
  const chartData = {
    labels: ["Attend on Time", "Late", "Absence", "On Leave"],
    datasets: [
      {
        data: [117, 28, 4, 2],
        backgroundColor: ["#20c997", "#ffc107", "#dc3545", "#0d6efd"],
        hoverBackgroundColor: ["#1db287", "#e6b307", "#c12c3b", "#0a5ad9"],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 15,
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="container mt-4" style={{boxShadow:'2px 3px 1px 3px grey',borderRadius:'5px'}}>

      <div className="d-flex justify-content-start mb-4">
        <button className="btn btn-link text-primary fw-bold me-3">Today</button>
        <button className="btn btn-link text-secondary">This Month</button>
      </div>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="text-center">
            <h2 className="fw-bold">117</h2>
            <p className="text-muted mb-0">Total Attendance</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="text-center">
            <h2 className="fw-bold text-warning">
              28 <small className="text-success">↑ 3.0%</small>
            </h2>
            <p className="text-muted mb-0">Late</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center">
            <h2 className="fw-bold text-danger">
              2 <small className="text-danger">↓ 3.0%</small>
            </h2>
            <p className="text-muted mb-0">On Leave</p>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Employeeattendance;
