function capitalising(cString) {
    const firstChar = cString.charAt(0);
    const firstCharCap = firstChar.toUpperCase();
    const restOfString = cString.slice(1);
    const combined = firstCharCap + restOfString;
    return combined;
}

module.exports = capitalising;