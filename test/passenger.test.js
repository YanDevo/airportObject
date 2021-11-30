const { TestWatcher } = require('@jest/core')
const Passengers= require('../passenger.js')

describe("Passengers Class", () => {
    test('Must have a name', () => {
      
        const testPassenger = new Passengers('Yannick')
        expect(testPassenger.name).toBe('Yannick')
    })
    test('Passenger has passport', () => {

        const testPassportNumber = new Passengers('Yannick', '12345',)
        expect(testPassportNumber.passportNumber).toBe('Yannick', '12345')
    })
    test('Passenger has bag')
})

