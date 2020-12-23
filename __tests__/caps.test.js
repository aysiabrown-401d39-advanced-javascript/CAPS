'use strict';

const SocketMock = require('socket.io-mock');
const io = require('socket.io-client');
jest.mock('socket.io-client');


const caps = require('../caps/caps');
const vendor = require('../vendor/vendor');
const driver = require('../driver/driver');



const payload = {
    storeName: "Dungeons & Dice",
    orderId: "asga35-464adgdd-adgdjyrt4-966700",
    customerName: "Jon Snow",
    address: "12345 Unicorn Lane"
}


describe('Events are logging', () => {
    let spy;
    let socket;


    beforeEach(() => {
        spy = jest.spyOn(console, 'log').mockImplementation();
        jest.useFakeTimers();
        socket = new SocketMock();
    });

    afterEach(() => {
        spy.mockRestore();
    })
    
    it('CAPS function will log the event output', () => {
        socket.on('pickup', (payload) => {
            caps(payload, 'pickup');
            expect(spy).toHaveBeenCalled();
        })

        socket.socketClient.emit('pickup', payload);
    });

    // it('Vendor properly logs a thank you', () => {
    //     vendor(payload);
    //     expect(spy).toHaveBeenCalled();
    // })

    // it('Driver waits on timeout before logging', () => {
    //     driver(payload);
    //     expect(setTimeout).toHaveBeenCalledTimes(2)
    // })

})
