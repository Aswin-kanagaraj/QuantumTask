import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reportchild2 = () => {
  
  const days = [
    { date: 27, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 28, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 29, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 30, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 31, label: 'Govern Holiday', hours: '8h', color: '#dae8fc' },
    { date: 1, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 2, label: 'Facio Web Design', hours: '8h', color: '#e9e7fc' },
    { date: 4, label: 'Paid Leave', hours: '8h', color: '#dff7ef' },
    { date: 12, label: 'Unpaid Leave', hours: '8h', color: '#fdebd3' },
    { date: 13, label: 'Unpaid Leave', hours: '8h', color: '#fdebd3' },

  ];

  const renderDays = () => {
    const grid = [];
    for (let i = 0; i < 35; i++) {
      const day = days.find(d => d.date === i + 1);

      grid.push(
        <div
          key={i}
          className="border p-2 text-center"
          style={{ height: '100px', backgroundColor: day?.color || 'transparent' }}
        >
          <div className="fw-bold">{i + 1 <= 31 ? i + 1 : ''}</div>
          {day && (
            <>
              <div className="small">{day.label}</div>
              <div className="text-muted">{day.hours}</div>
            </>
          )}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="container my-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h2>Calendar</h2>
      <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        <div className="bg-primary text-white text-center py-2">Sunday</div>
        <div className="bg-primary text-white text-center py-2">Monday</div>
        <div className="bg-primary text-white text-center py-2">Tuesday</div>
        <div className="bg-primary text-white text-center py-2">Wednesday</div>
        <div className="bg-primary text-white text-center py-2">Thursday</div>
        <div className="bg-primary text-white text-center py-2">Friday</div>
        <div className="bg-primary text-white text-center py-2">Saturday</div>
      </div>
      <div className="d-grid border" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>
        {renderDays()}
      </div>
    </div>
  );
};

export default Reportchild2;
