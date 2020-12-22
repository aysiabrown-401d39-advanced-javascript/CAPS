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

function logger(payload, event) {
    details.EVENT.event = event;
    details.EVENT.payload = payload;
    console.log(details);
}


events.on('pickup', (payload) => {
    logger(payload, 'pickup')
})

events.on('in-transit', (payload) => {
    logger(payload, 'in-transit')
})

events.on('delivered', (payload) => {
    logger(payload, 'delivered');
})

module.exports = logger;