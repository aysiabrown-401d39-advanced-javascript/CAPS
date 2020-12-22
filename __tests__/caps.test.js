'use strict';

const caps = require('../caps');
const vendor = require('../vendor');
const driver = require('../driver');
const payload = {
    storeName: "Dungeons & Dice",
    orderId: "asga35-464adgdd-adgdjyrt4-966700",
    customerName: "Jon Snow",
    address: "12345 Unicorn Lane"
}


describe('Events are logging', () => {
    let spy;
    let timer;


    beforeEach(() => {
        spy = jest.spyOn(console, 'log').mockImplementation();
        jest.useFakeTimers();
    });

    afterEach(() => {
        spy.mockRestore();
    })
    
    it('CAPS function will log the event output', () => {
        caps(payload, 'pickup');
        expect(spy).toHaveBeenCalled();
    });

    it('Vendor properly logs a thank you', () => {
        vendor(payload);
        expect(spy).toHaveBeenCalled();
    })

    it('Driver waits on timeout before logging', () => {
        driver(payload);
        expect(setTimeout).toHaveBeenCalledTimes(2)
    })

})
