import { restSchuldBerechung, toEuro } from "./../src/functions";

describe('Test Helper Functions', () => {
    test('Returns a two digit number for a long period of digits', () => {
        expect(toEuro(1.1111111111)).toBe(1.11)
    })
    test('Returns a two digit number for a long period of digits', () => {
        expect(restSchuldBerechung(50000, 120, 416.67, 2)).toBeCloseTo(5760.11, 0)
    })
})
