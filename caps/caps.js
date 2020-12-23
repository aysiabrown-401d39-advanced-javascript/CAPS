'use strict';


const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/caps');


caps.on('connection', (socket) => {
    console.log('You are connected to CAPS');

    socket.on('pickup', (payload) => {
        logger(payload, 'pickup');
        caps.emit('pickup', payload);
    })

    socket.on('in-transit', (payload) => {
        logger(payload, 'in-transit');
    })

    socket.on('delivered',(payload) => {
        logger(payload, 'delivered');
        caps.emit('delivered', payload);
    })
})



let details = {
    EVENT: {
       event: null,
       time: new Date(),
       payload: null
    }
}


// const events = require('../event');

// require('../vendor');
// require('../driver');

function logger(payload, event) {
    details.EVENT.event = event;
    details.EVENT.payload = payload;
    console.log(details);
}


// events.on('pickup', (payload) => {
//     logger(payload, 'pickup')
// })

// events.on('in-transit', (payload) => {
//     logger(payload, 'in-transit')
// })

// events.on('delivered', (payload) => {
//     logger(payload, 'delivered');
// })

module.exports = logger;
