import React, { useState } from 'react';

function AdminPanel() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventVenue, setEventVenue] = useState('');
    const [vipPrice, setVipPrice] = useState(0);
    const [silverPrice, setSilverPrice] = useState(0);
    const [vipCount, setVipCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);

    const handleCreateEvent = async () => {
        // Burada, Web3 kullanarak blockchain'e bir etkinlik ekleme işlemleri yapılmalıdır.
        // Örnek olarak sadece log atıyoruz.
        console.log("Creating Event:", {
            name: eventName,
            date: eventDate,
            venue: eventVenue,
            ticket: {
                vipPrice,
                silverPrice,
                vipCount,
                silverCount
            }
        });
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel: Create Event</h2>
            <div>
                <input 
                    placeholder="Event Name" 
                    value={eventName} 
                    onChange={(e) => setEventName(e.target.value)}
                />
                <input 
                    type="date" 
                    value={eventDate} 
                    onChange={(e) => setEventDate(e.target.value)}
                />
                <input 
                    placeholder="Venue" 
                    value={eventVenue} 
                    onChange={(e) => setEventVenue(e.target.value)}
                />
                <h3>VIP Tickets</h3>
                <input 
                    type="number" 
                    placeholder="Price (ETH)"
                    value={vipPrice} 
                    onChange={(e) => setVipPrice(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Available Count"
                    value={vipCount} 
                    onChange={(e) => setVipCount(e.target.value)}
                />
                <h3>Silver Tickets</h3>
                <input 
                    type="number" 
                    placeholder="Price (ETH)"
                    value={silverPrice} 
                    onChange={(e) => setSilverPrice(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Available Count"
                    value={silverCount} 
                    onChange={(e) => setSilverCount(e.target.value)}
                />
                <button onClick={handleCreateEvent}>Create Event</button>
            </div>
        </div>
    );
}

export default AdminPanel;
