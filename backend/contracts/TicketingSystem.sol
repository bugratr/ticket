// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TicketingSystem {

    struct Ticket {
        uint256 vipCount;
        uint256 vipPrice;
        uint256 silverCount;
        uint256 silverPrice;
    }

    struct Event {
        address owner;
        string name;
        string date;
        string venue;
        Ticket ticket;
        bool selling;
    }

    struct Order {
        uint256 eventId;
        uint256 vipCount;
        uint256 silverCount;
        uint256 timestamp;
    }

    Event[] private events;
    mapping(address => Order[]) private orders;

    event EventAdded(uint256 indexed eventId, string name);
    event TicketPurchased(address indexed user, uint256 eventId, uint256 vipCount, uint256 silverCount);

    function addEvent(string memory _name, string memory _date, string memory _venue, Ticket memory _ticket) public {
        Event memory newEvent = Event({
            owner: msg.sender,
            name: _name,
            date: _date,
            venue: _venue,
            ticket: _ticket,
            selling: true
        });

        events.push(newEvent);
        emit EventAdded(events.length - 1, _name);
    }

    function buyTicket(uint256 _eventId, uint256 _vipCount, uint256 _silverCount) public payable {
        require(_eventId < events.length, "Invalid Event ID");
        Event storage selectedEvent = events[_eventId];
        
        require(selectedEvent.selling, "Tickets are not being sold for this event.");
        require(selectedEvent.ticket.vipCount >= _vipCount, "Not enough VIP tickets");
        require(selectedEvent.ticket.silverCount >= _silverCount, "Not enough Silver tickets");

        uint256 totalPrice = (_vipCount * selectedEvent.ticket.vipPrice) + (_silverCount * selectedEvent.ticket.silverPrice);
        require(msg.value == totalPrice, "Incorrect Ether sent");

        selectedEvent.ticket.vipCount -= _vipCount;
        selectedEvent.ticket.silverCount -= _silverCount;

        Order memory newOrder = Order({
            eventId: _eventId,
            vipCount: _vipCount,
            silverCount: _silverCount,
            timestamp: block.timestamp
        });

        orders[msg.sender].push(newOrder);
        emit TicketPurchased(msg.sender, _eventId, _vipCount, _silverCount);
    }

    function getEvent(uint256 _eventId) public view returns(Event memory) {
        require(_eventId < events.length, "Invalid Event ID");
        return events[_eventId];
    }

    function getAllEvents() public view returns(Event[] memory) {
        return events;
    }

    function getMyOrders() public view returns(Order[] memory) {
        return orders[msg.sender];
    }
}
