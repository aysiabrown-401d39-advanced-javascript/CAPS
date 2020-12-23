'use strict';

// const events = require('./event');
// events.on('pickup', transit)

const io = require('socket.io-client')
const host = 'http://localhost:3000/caps';
const capsConnect = io.connect(host);

capsConnect.on('pickup', transit)


function transit(payload) {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderId}`)
        capsConnect.emit('in-transit', payload);
    },1500)

    setTimeout(() => {
        console.log(`DRIVER: delivered ${payload.orderId}`)
        capsConnect.emit('delivered', payload);
    }, 3000)
}

module.exports = transit;