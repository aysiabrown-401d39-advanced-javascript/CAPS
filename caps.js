'use strict';

const events = require('./event');

require('./vendor');
require('./driver');

let details = {
    EVENT: {
       event: null,
       time: new Date(),
       payload: null
    }

}

events.on('pickup', (payload) => {
    details.EVENT.event = 'pickup';
    details.EVENT.payload = payload;
    console.log(details);
})

events.on('in-transit', (payload) => {
    details.EVENT.event = 'in-transit'
    console.log(details);
})

events.on('delivered', (payload) => {
    details.EVENT.event = 'delivered'
    console.log(details);
})