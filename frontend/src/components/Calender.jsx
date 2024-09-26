import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
      <Calendar 
        onChange={onChange} 
        value={value} 
        className="bg-white shadow-lg rounded-lg p-4"
        tileClassName={({ date, view }) => 
          view === 'month' && date.getDay() === 0 ? 'bg-blue-100' : '' // Highlight Sundays
        }
        nextLabel={<span className="text-gray-600">▶</span>}
        prevLabel={<span className="text-gray-600">◀</span>}
      />
    </div>
  );
}

export default Calender;
