const express = require('express');
const Web3 = require('web3');
const contract = require('@truffle/contract');

const app = express();
const port = 3001;

// Camino ağının RPC URL'si (Bu bilgiyi sağlamalısınız.)
const provider = new Web3.providers.HttpProvider('YOUR_CAMINO_RPC_URL');
const web3 = new Web3(provider);

// Truffle'dan çıktı olarak alınan JSON dosyasını yükleyin
const TicketingSystemJSON = require('./build/contracts/TicketingSystem.json');

const TicketingSystem = contract(TicketingSystemJSON);
TicketingSystem.setProvider(provider);

app.get('/events', async (req, res) => {
    try {
        const instance = await TicketingSystem.deployed();
        const events = await instance.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

