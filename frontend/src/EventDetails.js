import React, { useState } from 'react';

function EventDetails({ event }) {
    const [vipCount, setVipCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);

    const handleBuy = async () => {
        // Web3 ile bilet satın alma işlemleri burada gerçekleştirilir.
        // Örnek olarak sadece log atıyoruz.
        console.log(`VIP Tickets: ${vipCount}, Silver Tickets: ${silverCount}`);
    };

    return (
        <div className="event-details">
            <h2>{event.name}</h2>
            <p>{event.date} @ {event.venue}</p>
            <div>
                <h3>VIP Tickets</h3>
                <p>Price: {event.ticket.vipPrice} ETH</p>
                <p>Available: {event.ticket.vipCount}</p>
                <input 
                    type="number" 
                    value={vipCount} 
                    onChange={(e) => setVipCount(e.target.value)}
                />
            </div>
            <div>
                <h3>Silver Tickets</h3>
                <p>Price: {event.ticket.silverPrice} ETH</p>
                <p>Available: {event.ticket.silverCount}</p>
                <input 
                    type="number" 
                    value={silverCount} 
                    onChange={(e) => setSilverCount(e.target.value)}
                />
            </div>
            <button onClick={handleBuy}>Buy Tickets</button>
        </div>
    );
}

export default EventDetails;
