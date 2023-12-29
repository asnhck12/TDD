const reverseString = require('./reverseString');

test('Reversing the string entered as an argument', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');

});

