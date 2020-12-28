'use strict';

const uuid = require('uuid').v4;
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/caps');

const queue = {
    messages: {}
};


caps.on('connection', (socket) => {
    console.log('You are connected to CAPS');

    socket.on('join', (room) => {
        console.log('Welcome to ', room);
        socket.join(room);
    })

    socket.on('recieved', (message) => {
        console.log('Messages viewed, deleting...')
        delete queue.messages[message.id];
    })

    socket.on('getAll', () => {
        Object.keys(queue.messages).forEach(id => {
            socket.emit('message', { id, payload: queue.messages[id]})
        })
    })

    socket.on('pickup', (payload) => {
        logger(payload, 'pickup');
        caps.emit('pickup', payload);
    })

    socket.on('in-transit', (payload) => {
        logger(payload, 'in-transit');
        caps.to(payload.storeName).emit('in-transit', payload);
    })

    socket.on('delivered',(payload) => {
        logger(payload, 'delivered');
        let id = uuid();
        queue.messages[id] = payload;
        caps.to(payload.storeName).emit('delivered', payload);
    })
})



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


module.exports = logger;
