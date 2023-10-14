import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:3001/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <h1>Ticketing System</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} at {event.venue} on {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
