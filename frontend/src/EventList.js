import React, { useState, useEffect } from 'react';
import EventDetails from './EventDetails';

function EventList() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

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
        <div className="event-list">
            <h1>Available Events</h1>
            {events.map((event, index) => (
                <div key={index} onClick={() => setSelectedEvent(event)}>
                    {event.name} @ {event.venue} on {event.date}
                </div>
            ))}

            {selectedEvent && <EventDetails event={selectedEvent} />}
        </div>
    );
}

export default EventList;
