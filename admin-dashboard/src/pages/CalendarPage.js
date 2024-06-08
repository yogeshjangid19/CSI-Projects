// src/pages/CalendarPage.js
import React from 'react';
import Calendar from '../components/Calendar';

const events = [
  { title: 'event 1', date: '2023-06-01' },
  { title: 'event 2', date: '2023-06-02' },
];

const CalendarPage = () => {
  return <Calendar events={events} />;
};

export default CalendarPage;
