import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default Calendar CSS

function MyCalendar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <div style={{ maxWidth: '500px', textAlign: 'center' }}>
        <h1 style={{ color: '#7851A9' }}>IQ Event Calendar</h1>
        <div style={{ backgroundColor: '#F0F0F0', padding: '20px', borderRadius: '8px' }}>
          <Calendar
            calendarType="US"
            style={{ color: '#7851A9' }} // Set the date selector color
          />
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
