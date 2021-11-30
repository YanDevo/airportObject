const Bag = require('../bags')

describe("Bag Class", () => {
    test('Bag Has Weight', () => {
        const testBag = new Bag(8)
        expect(testBag.weight).toBe(8)
    })
})




