import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reportchild1 = () => {
  return (
    <div className="container py-4" style={{ backgroundColor: '#f9fafc', fontFamily: 'Roboto, sans-serif' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Reports</h2>
        <div className="d-flex align-items-center">
          <button className="btn btn-light border mx-1">&#8249;</button>
          <span>November 2025</span>
          <button className="btn btn-light border mx-1">&#8250;</button>
        </div>
      </div>

      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search employees by ID, Name, etc."
        />
        <button className="btn btn-outline-primary">Filter</button>
      </div>

 
      <div className="row text-center mb-4">

        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <p className="mb-1">Reported time this month</p>
              <h3 className="fw-bold">96 hr 30 min</h3>
              <p className="text-muted">186 hr required</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <p className="mb-1">Time Balance</p>
              <h3 className="fw-bold">+30 min</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <p className="mb-1">Overtime this month</p>
              <h3 className="fw-bold">2 hr</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <p className="mb-1">Annual leave this month</p>
              <h3 className="fw-bold">3 days</h3>
              <p className="text-muted">days left in 2024</p>
            </div>
          </div>
        </div>
      </div>


      <div className="progress" style={{ height: '12px', borderRadius: '6px' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '50%', backgroundColor: 'purple' }}
        ></div>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '10%', backgroundColor: 'green' }}
        ></div>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '10%', backgroundColor: 'orange' }}
        ></div>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '5%', backgroundColor: 'blue' }}
        ></div>
      </div>
    </div>
  );
};

export default Reportchild1;
