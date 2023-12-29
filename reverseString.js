function reverseString(word) {
    var splitWord = word.split("");
    var reverseSplitWord = splitWord.reverse();
    var joinSplit = reverseSplitWord.join("");
    return joinSplit;
}

module.exports = reverseString;