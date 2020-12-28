'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/caps'
const capsConnect = io.connect(host);
const faker = require('faker');
const store = '1-206-Flowers'



setInterval(() => {
    let storeName = store;
    let orderId = faker.random.uuid();
    let customerName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let address = `${faker.address.streetAddress(true)}`;
    capsConnect.emit('pickup', { storeName, orderId, customerName, address})
}, 5000)

// joining separate 'room' for this store
capsConnect.emit('join',  store);

capsConnect.emit('getAll');

// messages are viewed live if connected
capsConnect.on('delivered', thanks);

// messages are viewed here when disconnected and reconnected 
capsConnect.on('message', thanks);


function thanks(payload) {
    console.log(`From ${store}: thank you for delivering ${payload.orderId}`);
    capsConnect.emit('recieved', payload)
}

module.exports = thanks;