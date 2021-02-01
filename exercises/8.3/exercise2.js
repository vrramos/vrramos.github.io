const assert = require('assert')

const sum = (...input) => {
    let count = 0;
    for(let indice of input) {
        count+=indice;
    }
    return count
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
