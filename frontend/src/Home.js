import React from 'react';
import EventList from './EventList';

function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to the Ticketing System</h1>
                <p>Select an event from the list below to buy tickets.</p>
            </header>
            
            <EventList />
        </div>
    );
}

export default Home;
