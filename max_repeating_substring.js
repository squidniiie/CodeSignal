var maxRepeating = function (sequence, word) {
    let string = word, i = 0
    while (sequence.includes(string)) {
        i++
        string += word
    }
    return i
};

console.log("hello saaaaal")