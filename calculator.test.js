const { sum, subtraction, multiplication, division } = require('./calculator');


test('Check calculator function', () => {
    expect(sum(2, 5)).toBe(7);
    expect(subtraction(7, 4)).toBe(3);
    expect(multiplication(5, 10)).toBe(50);
    expect(division(4, 2)).toBe(2);

});

