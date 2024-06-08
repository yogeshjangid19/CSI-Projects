// src/components/Calendar.js
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      { title: 'Event 1', date: '2023-06-01' },
      { title: 'Event 2', date: '2023-06-02' },
    ]);
  }, []);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Calendar;

