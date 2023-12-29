const capitalising = require('./capitalising');

regexp = /^[A-Z]/;
const word = 'hello';

test('Capitalising the first character in a string', () => {
    expect(capitalising(word)).toMatch(regexp);
});

