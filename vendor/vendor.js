'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/caps'
const capsConnect = io.connect(host);
const faker = require('faker');

// const events = require('./event');


setInterval(() => {
    let storeName = faker.company.companyName();
    let orderId = faker.random.uuid();
    let customerName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let address = `${faker.address.streetAddress(true)}`;
    capsConnect.emit('pickup', { storeName, orderId, customerName, address})
}, 5000)

capsConnect.on('delivered', thanks);

// events.on('delivered', thanks);

function thanks(payload) {
    console.log(`VENDOR: thank you for delivering ${payload.orderId}`)
}

module.exports = thanks;