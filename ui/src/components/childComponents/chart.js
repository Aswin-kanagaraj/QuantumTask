import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { CgMenuCheese } from "react-icons/cg";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

const Attendancechart = () => {
  const lineData = {
    labels: ["01 Aug", "02 Aug", "03 Aug", "04 Aug", "07 Aug", "09 Aug", "14 Aug", "16 Aug"],
    datasets: [
      {
        label: "Attendance",
        data: [60, 70, 80, 91, 85, 70, 75, 86],
        fill: true,
        backgroundColor: "rgba(72, 175, 236, 0.2)",
        borderColor: "#48AFEC",
        pointBackgroundColor: "#48AFEC",
        pointBorderColor: "#fff",
      },
    ],
  };

  const lineOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          color: "#666",
        },
      },
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
          color: "#666",
        },
      },
    },
  };

  const barData = {
    labels: ["Sales", "IT", "Marketing", "Legal", "API"],
    datasets: [
      {
        label: "Weekly Attendance",
        data: [50, 60, 86, 60, 40],
        backgroundColor: ["#E5F4FB", "#E5F4FB", "#48AFEC", "#E5F4FB", "#E5F4FB"],
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          color: "#666",
        },
      },
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
          color: "#666",
        },
      },
    },
  };

  return (
    <div className='container' style={{ display: "flex", gap: "1rem", flex: 1 ,}}>
      <div
        style={{
          flex: 2,
          backgroundColor: "#F3F6FF",
          borderRadius: "8px",
          padding: "1rem",
          width:'35vh'
        }}
      >
        <h3>Attendance Statistics</h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ color: "#48AFEC" }}>● Daily</span>
            <span style={{ marginLeft: "1rem", color: "#C8CAD5" }}>○ Weekly</span>
            <span style={{ marginLeft: "1rem", color: "#C8CAD5" }}>○ Monthly</span>
          </div>
          <div style={{ color: "#C8CAD5" }}><CgMenuCheese /></div>
        </div>
        <div style={{ height: "300px", marginTop: "1rem" }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#F3F6FF",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <h3>Weekly Attendance</h3>
        <div style={{ color: "#C8CAD5", textAlign: "right" }}><CgMenuCheese /></div>
        <div style={{ height: "300px", marginTop: "1rem" }}>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default Attendancechart;
