'use strict';

const events = require('./event');

events.on('pickup', transit)


function transit(payload) {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderId}`)
        events.emit('in-transit', payload);
    },1000)

    setTimeout(() => {
        console.log(`DRIVER: delivered ${payload.orderId}`)
        events.emit('delivered', payload);
    }, 3000)
}

module.exports = transit;